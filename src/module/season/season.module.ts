import { Module } from '@nestjs/common';
import { SeasonService } from './season.service';
import { SeasonController } from './season.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { seasonSchema } from 'src/database/models/season.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Season', schema: seasonSchema }])
  ],
  providers: [SeasonService],
  controllers: [SeasonController]
})
export class SeasonModule { }
