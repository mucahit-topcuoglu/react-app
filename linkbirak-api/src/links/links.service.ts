import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Link } from "./link.entity";
import { Tag } from "../tags/tag.entity";
import { CreateLinkDto } from "./dto/create-link.dto";
import { UpdateLinkDto } from "./dto/update-link.dto";

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
    
    const link = this.linksRepository.create({
      ...linkData,
      userId,
    });
    
    console.log("Creating link in database:", link);
    
    const savedLink = await this.linksRepository.save(link);
    console.log("Link saved to database successfully:", savedLink);
    
    if (tags && tags.length > 0) {
      const tagEntities = await this.processTags(tags);
      
      savedLink.tags = tagEntities;
      const updatedLink = await this.linksRepository.save(savedLink);
      console.log("Link updated with tags:", updatedLink);
      
      return updatedLink;
    }
    
    return savedLink;
  }

  async findAll(userId: number): Promise<Link[]> {
    console.log("Fetching links from database for userId:", userId);
    
    const links = await this.linksRepository.find({
      where: { userId: userId },
      relations: ["tags"],
      order: { createdAt: "DESC" },
    });
    
    console.log("Links fetched from database:", links);
    return links;
  }

  async findOne(id: number, userId: number): Promise<Link> {
    console.log("Finding link with id:", id, "for userId:", userId);
    
    const link = await this.linksRepository.findOne({
      where: { id, userId },
      relations: ["tags"],
    });
    
    if (!link) {
      throw new NotFoundException("Link bulunamadı");
    }
    
    return link;
  }

  async update(id: number, updateLinkDto: UpdateLinkDto, userId: number): Promise<Link> {
    console.log("Updating link with id:", id, "for userId:", userId);
    
    const link = await this.linksRepository.findOne({
      where: { id, userId },
      relations: ["tags"],
    });
    
    if (!link) {
      throw new NotFoundException("Link bulunamadı veya bu kullanıcıya ait değil");
    }
    
    // Link bilgilerini güncelle
    if (updateLinkDto.url) link.url = updateLinkDto.url;
    if (updateLinkDto.title) link.title = updateLinkDto.title;
    if (updateLinkDto.description) link.description = updateLinkDto.description;
    
    // Tag'leri güncelle
    if (updateLinkDto.tags !== undefined) {
      const tagEntities = await this.processTags(updateLinkDto.tags);
      link.tags = tagEntities;
    }
    
    const updatedLink = await this.linksRepository.save(link);
    console.log("Link updated successfully:", updatedLink);
    
    return updatedLink;
  }

  async delete(id: number, userId: number): Promise<void> {
    const link = await this.linksRepository.findOneBy({
      id: id,
      userId: userId
    });
    
    if (!link) {
      throw new NotFoundException("Link bulunamadı");
    }
    await this.linksRepository.remove(link);
    console.log("Link Silindi:", id);
  }

  private async processTags(tagNames: string[]): Promise<Tag[]> {
    const tagEntities: Tag[] = [];
    
    for (const tagName of tagNames) {
      const trimmedName = tagName.trim();
      if (trimmedName) {
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
