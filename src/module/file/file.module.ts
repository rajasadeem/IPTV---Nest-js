import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { fileSchema } from 'src/database/models/file.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'File', schema: fileSchema }])
  ],
  providers: [FileService],
  controllers: [FileController]
})
export class FileModule {}
