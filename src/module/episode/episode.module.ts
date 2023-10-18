import { Module } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { episodeSchema } from 'src/database/models/episode.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Episode', schema: episodeSchema }])
  ],
  providers: [EpisodeService],
  controllers: [EpisodeController]
})
export class EpisodeModule { }
