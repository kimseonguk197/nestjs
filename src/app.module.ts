import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardModule } from './board/board.module';
import { AuthorModule } from './author/author.module';
import { CatsModule } from './mongotest/cat.module';
import { OrderModule } from './order/order.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3300,
      username: 'root',
      password: '1234',
      database: 'typeboard',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/nestjs'),
    BoardModule,
    AuthorModule,
    CatsModule,
    OrderModule,
    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
