import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author as AuthorEntity } from './author.entity';
import { AuthorDto } from './author.dto';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() authorDto: AuthorDto): Promise<AuthorEntity> {
    return this.authorService.create(authorDto);
  }

  @Get()
  findAll(): Promise<AuthorEntity[]> {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<AuthorEntity> {
    return this.authorService.findOne(id);
  }
}
