import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { bookService } from './book.service';

@Controller('books')
export class booksController {
  constructor(private readonly BookService: bookService) {}
  @Post()
  addBooks(
    @Body('title') bookTitle: string,
    @Body('description') bookDesc: string,
    @Body('authorName') bookAuthorName: string,
    @Body('price') price: number,
  ): any {
    const generatedId = this.BookService.insertBook(
      bookTitle,
      bookDesc,
      bookAuthorName,
      price,
    );
    return generatedId;
  }
  @Get()
  getAllBooks() {
    return this.BookService.getBooks();
  }

  @Get(':id')
  getBook(@Param('id') Id: string) {
    return this.BookService.getSingleBook(Id);
  }

  @Patch(':id')
  updateBook(
    @Param('id') bkId: string,
    @Body('title') bkTitle: string,
    @Body('description') bkDesc: string,
    @Body('price') bkPrice: number,
  ) {
    this.BookService.updateBook(bkId, bkTitle, bkDesc, bkPrice);
    return 'Updated Book Succesfully';
  }

  @Delete(':id')
  removeBook(@Param('id') bkId: string) {
    this.BookService.removeBook(bkId);
    return 'Book deleted Successfully';
  }
}
