import { Module } from '@nestjs/common';
import { SeasonService } from './season.service';
import { SeasonController } from './season.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { seasonSchema } from 'src/database/models/season.schema';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigurationModule, JwtModule,
    MongooseModule.forFeature([{ name: 'Season', schema: seasonSchema }])
  ],
  providers: [SeasonService],
  controllers: [SeasonController]
})
export class SeasonModule { }
