import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}

  async createOrder(
    name: string,
    items: { item: string; quantity: number; ingredients?: string[] }[],
  ) {
    const newOrder = new this.orderModel({ name, items });
    const result = await newOrder.save();
    return result;
  }

  async findOrders() {
    const orders = await this.orderModel.find().exec();
    return orders;
  }
}
