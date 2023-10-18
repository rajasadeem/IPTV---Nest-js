import { Module } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { seriesSchema } from 'src/database/models/series.schema';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigurationModule, JwtModule,
    MongooseModule.forFeature([{ name: 'Series', schema: seriesSchema }])
  ],
  providers: [SeriesService],
  controllers: [SeriesController]
})
export class SeriesModule { }
