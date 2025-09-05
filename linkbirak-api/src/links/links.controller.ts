import { Controller, Get, Post, Delete, Patch, Body, Param, Request, HttpException, HttpStatus } from "@nestjs/common";
import { LinksService } from "./links.service";
import { CreateLinkDto } from "./dto/create-link.dto";
import { UpdateLinkDto } from "./dto/update-link.dto";

@Controller("links")
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get("test")
  async test() {
    return { message: "Links endpoint çalışıyor!" };
  }

  @Post()
  async create(@Body() createLinkDto: CreateLinkDto) {
    try {
      console.log("Received link data:", createLinkDto);
      
      const result = await this.linksService.create(createLinkDto, 1);
      console.log("Link created successfully:", result);
      
      return result;
    } catch (error) {
      console.error("Error creating link:", error);
      console.error("Error stack:", error.stack);
      
      throw new HttpException(
        `Link oluşturulurken hata: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get()
  async findAll() {
    try {
      console.log("Fetching links for userId: 1");
      
      const result = await this.linksService.findAll(1);
      console.log("Links fetched successfully:", result);
      
      return result;
    } catch (error) {
      console.error("Error fetching links:", error);
      console.error("Error stack:", error.stack);
      
      throw new HttpException(
        `Linkler getirilirken hata: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    try {
      console.log("Fetching link with id:", id);
      
      const result = await this.linksService.findOne(parseInt(id), 1);
      console.log("Link fetched successfully:", result);
      
      return result;
    } catch (error) {
      console.error("Error fetching link:", error);
      console.error("Error stack:", error.stack);
      
      throw new HttpException(
        `Link getirilirken hata: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateLinkDto: UpdateLinkDto) {
    try {
      console.log("Updating link with id:", id);
      console.log("Update data:", updateLinkDto);
      
      const result = await this.linksService.update(parseInt(id), updateLinkDto, 1);
      console.log("Link updated successfully:", result);
      
      return result;
    } catch (error) {
      console.error("Error updating link:", error);
      console.error("Error stack:", error.stack);
      
      throw new HttpException(
        `Link güncellenirken hata: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    try {
      await this.linksService.delete(parseInt(id), 1);
      console.log("Link silindi");
      
      return { message: "Link başarıyla silindi" };
    } catch (error) {
      console.error("link silinemedi:", error);
      throw new HttpException(
        `Link silinirken hata: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
