import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';
import { Menu, MenuDocument } from './menu.schema';
import { Express } from 'express';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu.name) private readonly menuModel: Model<MenuDocument>,
  ) {}

  async createMenu(
    name: string,
    price: string,
    imagePath: string,
  ): Promise<MenuDocument> {
    const menu = new this.menuModel({ name, price, imagePath });
    return menu.save();
  }

  async findMenus(): Promise<MenuDocument[]> {
    return this.menuModel.find().exec();
  }

  getImagePath(imagePath: string): string {
    return path.join(imagePath); // 실제 이미지 URL로 변환
  }

  async saveImage(image: Express.Multer.File): Promise<string> {
    const storagePath = path.join(__dirname, '../../images/menu_images');
    if (!fs.existsSync(storagePath)) {
      fs.mkdirSync(storagePath, { recursive: true });
    }

    const imageName = image.originalname; // 사용자가 업로드한 이미지 파일명을 그대로 사용
    const imagePath = path.join(storagePath, imageName);
    fs.writeFileSync(imagePath, image.buffer);

    return imagePath;
  }
}
