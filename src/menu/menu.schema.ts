import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Menu {
  @Prop()
  name: string;

  @Prop()
  price: string;

  @Prop()
  imagePath: string;
}

export type MenuDocument = Menu & Document;
export const MenuSchema = SchemaFactory.createForClass(Menu);

export interface MenuWithImagePath extends Menu {
  imagePath: string;
}
