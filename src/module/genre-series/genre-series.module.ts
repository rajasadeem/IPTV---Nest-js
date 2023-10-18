import { Module } from '@nestjs/common';
import { GenreSeriesService } from './genre-series.service';
import { GenreSeriesController } from './genre-series.controller';

@Module({
  providers: [GenreSeriesService],
  controllers: [GenreSeriesController]
})
export class GenreSeriesModule {}
