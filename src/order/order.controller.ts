// order.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(
    @Body('name') name: string,
    @Body('items') items: { item: string; quantity: number }[],
  ) {
    const order = await this.orderService.createOrder(name, items);
    return order;
  }
}
