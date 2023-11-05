import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { genreSchema } from 'src/database/models/genre.schema';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigurationModule, JwtModule,
    MongooseModule.forFeature([{ name: 'Genre', schema: genreSchema}])
  ],
  providers: [GenreService],
  controllers: [GenreController]
})
export class GenreModule {}
