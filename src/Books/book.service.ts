import { Injectable, NotFoundException } from '@nestjs/common';
import { book } from './book.modal';

@Injectable()
export class bookService {
  private Book: book[] = [];

  insertBook(title: string, desc: string, authorName: string, price: number) {
    const idOfBook = Math.random().toString();
    const newBook = new book(idOfBook, title, desc, authorName, price);
    this.Book.push(newBook);
    return { id: idOfBook };
  }

  getBooks() {
    return [...this.Book];
  }

  getSingleBook(bId: string) {
    const book = this.findBook(bId)[0];
    return { ...book };
  }

  updateBook(id: string, name: string, description: string, price: number) {
    const [book, index] = this.findBook(id);
    const updateBook = { ...book };
    if (name) {
      updateBook.bookName = name;
    }
    if (description) {
      updateBook.bookDesription = description;
    }
    if (price) {
      updateBook.price = price;
    }
    this.Book[index] = updateBook;
  }

  removeBook(id: string) {
    const [book, index] = this.findBook(id);
    this.Book.splice(index, 1);
  }

  private findBook(bId: string): [book, number] {
    const bookIndex = this.Book.findIndex((b) => b.bookID === bId);
    const book = this.Book[bookIndex];
    if (!book) {
      throw new NotFoundException('Not Found');
    }
    return [book, bookIndex];
  }
}
