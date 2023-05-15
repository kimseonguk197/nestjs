// order.controller.ts
import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { Request } from 'express'; // Request import 추가

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(
    @Body('name') name: string,
    @Body('items')
    items: { item: string; quantity: number; ingredients?: string[] }[],
    @Req() request: Request,
  ) {
    console.log('create start!!', request.body);
    const order = await this.orderService.createOrder(name, items);
    return order;
  }

  @Get()
  async findOrders() {
    // 주문 목록 조회 로직을 구현합니다.
    const orders = await this.orderService.findOrders();
    return orders;
  }
}
