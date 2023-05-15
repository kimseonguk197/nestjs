import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  name: String,
  items: [
    {
      item: String,
      quantity: Number,
      ingredients: [String],
    },
  ],
});

export interface Order extends mongoose.Document {
  name: string;
  items: {
    item: string;
    quantity: number;
    ingredients?: string[];
  }[];
}
