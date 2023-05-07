import { Controller, Get, Ip, Post, Body, Param } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.entity';
import { BoardDto } from './board.dto';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  create(@Body() boardDto: BoardDto): Promise<Board> {
    return this.boardService.create(boardDto);
  }

  @Get()
  getHello(@Ip() ip: string): string {
    return `Your IP address is ${ip}`;
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Board> {
    return this.boardService.findOne(id);
  }
}
