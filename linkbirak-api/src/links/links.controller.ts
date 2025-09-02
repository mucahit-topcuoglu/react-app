import { Controller, Get, Post, Delete, Body, Param, Request, HttpException, HttpStatus } from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get('test')
  async test() {
    return { message: 'Links endpoint çalışıyor!' };
  }

  @Post()
  async create(@Body() createLinkDto: CreateLinkDto) {
    try {
      console.log('Received link data:', createLinkDto);
      
      // Geçici olarak userId 1 kullanıyoruz
      const result = await this.linksService.create(createLinkDto, 1);
      console.log('Link created successfully:', result);
      
      return result;
    } catch (error) {
      console.error('Error creating link:', error);
      console.error('Error stack:', error.stack);
      
      throw new HttpException(
        `Link oluşturulurken hata: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get()
  async findAll() {
    try {
      console.log('Fetching links for userId: 1');
      
      // Geçici olarak userId 1 kullanıyoruz
      const result = await this.linksService.findAll(1);
      console.log('Links fetched successfully:', result);
      
      return result;
    } catch (error) {
      console.error('Error fetching links:', error);
      console.error('Error stack:', error.stack);
      
      throw new HttpException(
        `Linkler getirilirken hata: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // Link silme endpoint'i
  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      console.log('Deleting link with id:', id);
      
      // Geçici olarak userId 1 kullanıyoruz
      await this.linksService.delete(parseInt(id), 1);
      console.log('Link deleted successfully');
      
      return { message: 'Link başarıyla silindi' };
    } catch (error) {
      console.error('Error deleting link:', error);
      console.error('Error stack:', error.stack);
      
      throw new HttpException(
        `Link silinirken hata: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
