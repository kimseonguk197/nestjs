import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Menu, MenuDocument } from './menu.schema';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createMenu(
    @Body('name') name: string,
    @Body('price') price: string,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<MenuDocument> {
    const imagePath = await this.menuService.saveImage(image);
    const menu = await this.menuService.createMenu(name, price, imagePath);
    return menu;
  }

  @Get()
  async findMenus(): Promise<Menu[]> {
    return await this.menuService.findMenus();
  }
}
