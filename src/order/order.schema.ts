import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  name: String,
  items: [
    {
      item: String,
      quantity: Number,
    },
  ],
});

export interface Order extends mongoose.Document {
  name: string;
  items: {
    item: string;
    quantity: number;
  }[];
}
