import { Module } from '@nestjs/common';
import { StreamService } from './stream.service';
import { StreamController } from './stream.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { streamSchema } from 'src/database/models/stream.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Stream', schema: streamSchema }])
  ],
  providers: [StreamService],
  controllers: [StreamController]
})
export class StreamModule { }
