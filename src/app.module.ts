/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { GenreModule } from './module/genre/genre.module';
import { UserModule } from './module/user/user.module';
import { SeriesModule } from './module/series/series.module';
import { FileModule } from './module/file/file.module';
import { GenreSeriesModule } from './module/genre-series/genre-series.module';
import { SeasonModule } from './module/season/season.module';
import { EpisodeModule } from './module/episode/episode.module';
import { StreamModule } from './module/stream/stream.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationService } from './configuration/configuration.service';

@Module({
  imports: [ConfigurationModule,
    MongooseModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: async (configService: ConfigurationService) => (
        configService.mongooseConfig
      ),
      inject: [ConfigurationService],
    }),
     UserModule, GenreModule, SeriesModule, FileModule, GenreSeriesModule, SeasonModule, EpisodeModule, StreamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
