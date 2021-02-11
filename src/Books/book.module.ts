import { Module } from '@nestjs/common';
import { booksController } from './book.controller';
import { bookService } from './book.service';

@Module({
  controllers: [booksController],
  providers: [bookService],
})
export class booksModule {}
