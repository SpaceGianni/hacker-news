import { Controller, Get, Param, Delete } from '@nestjs/common';
import { NewsService } from '../service/news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  GetAllNews() {
    return this.newsService.findAll();
  }

  @Delete(':story_id')
  removeOne(@Param('story_id') story_id: number) {
    return this.newsService.softDelete(story_id);
  }

  @Get('updated')
  returnNews() {
    return this.newsService.getNews();
  }
}
