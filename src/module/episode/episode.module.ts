import { Module } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { episodeSchema } from 'src/database/models/episode.schema';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigurationModule, JwtModule,
    MongooseModule.forFeature([{ name: 'Episode', schema: episodeSchema }])
  ],
  providers: [EpisodeService],
  controllers: [EpisodeController]
})
export class EpisodeModule { }
