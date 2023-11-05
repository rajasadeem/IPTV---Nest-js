import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFileDto } from './dto/create.file.dto';
import { Model } from 'mongoose';
import { UpdateFileDto } from './dto/update.file.dto';

@Injectable()
export class FileService {
    constructor(@InjectModel('File') private fileModel: Model<File>) { }

    async addFile(createFileDto: CreateFileDto): Promise<File> {
        return await this.fileModel.create(createFileDto)
    }

    async getAllfile(): Promise<File[]> {
        return await this.fileModel.find()
    }

    async getFileById(fileId: string): Promise<File[]> {
        return await this.fileModel.findById(fileId)
    }

    async updateFile(fileId: string, updateFileDto: UpdateFileDto): Promise<File> {
        return await this.fileModel.findByIdAndUpdate(fileId, updateFileDto, { new: true })
    }

    async deleteFile(fileId: string): Promise<File> {
        return await this.fileModel.findByIdAndDelete(fileId)
    }
}

