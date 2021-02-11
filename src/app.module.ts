import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { booksModule } from './Books/book.module';

@Module({
  imports: [booksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
