import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from './link.entity';
import { Tag } from '../tags/tag.entity';
import { CreateLinkDto } from './dto/create-link.dto';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private linksRepository: Repository<Link>,
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}

  async create(createLinkDto: CreateLinkDto, userId: number): Promise<Link> {
    const { tags, ...linkData } = createLinkDto;
    
    // Önce link'i oluştur
    const link = this.linksRepository.create({
      ...linkData,
      userId,
    });
    
    console.log('Creating link in database:', link);
    
    // Link'i kaydet
    const savedLink = await this.linksRepository.save(link);
    console.log('Link saved to database successfully:', savedLink);
    
    // Tag'leri işle ve link'e ekle
    if (tags && tags.length > 0) {
      const tagEntities = await this.processTags(tags);
      
      // Link'i tag'lerle birlikte güncelle
      savedLink.tags = tagEntities;
      const updatedLink = await this.linksRepository.save(savedLink);
      console.log('Link updated with tags:', updatedLink);
      
      return updatedLink;
    }
    
    return savedLink;
  }

  async findAll(userId: number): Promise<Link[]> {
    console.log('Fetching links from database for userId:', userId);
    
    const links = await this.linksRepository.find({
      where: { userId: userId },
      relations: ['tags'],
      order: { createdAt: 'DESC' },
    });
    
    console.log('Links fetched from database:', links);
    return links;
  }

  // Link silme metodu
  async delete(id: number, userId: number): Promise<void> {
    console.log('Deleting link with id:', id, 'for userId:', userId);
    
    // Link'i bul ve kullanıcıya ait olduğunu kontrol et
    const link = await this.linksRepository.findOneBy({
      id: id,
      userId: userId
    });
    
    if (!link) {
      console.log('Link not found or not owned by user');
      throw new NotFoundException('Link bulunamadı veya bu kullanıcıya ait değil');
    }
    
    // Link'i sil
    await this.linksRepository.remove(link);
    console.log('Link deleted successfully:', id);
  }

  private async processTags(tagNames: string[]): Promise<Tag[]> {
    const tagEntities: Tag[] = [];
    
    for (const tagName of tagNames) {
      const trimmedName = tagName.trim();
      if (trimmedName) {
        // Tag var mı kontrol et, yoksa oluştur
        let tag = await this.tagsRepository.findOneBy({
          name: trimmedName
        });
        
        if (!tag) {
          tag = this.tagsRepository.create({ name: trimmedName });
          tag = await this.tagsRepository.save(tag);
        }
        
        tagEntities.push(tag);
      }
    }
    
    return tagEntities;
  }
}
