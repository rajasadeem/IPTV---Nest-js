import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stream } from 'src/interface/stream.interface';
import { CreateStreamDto } from './dto/create.stream.dto';
import { UpdateStreamDto } from './dto/update.stream.dto';

@Injectable()
export class StreamService {
    constructor(@InjectModel('Stream') private streamModel: Model<Stream>) { }

    async addStream(createStreamDto: CreateStreamDto): Promise<Stream> {
        return await this.streamModel.create(createStreamDto)
    }

    async getAllStream(): Promise<Stream[]> {
        return await this.streamModel.find()
    }

    async getStreamById(streamId: string): Promise<Stream> {
        return await this.streamModel.findById(streamId)
    }

    async updateStream(streamId: string, updateStreamDto: UpdateStreamDto): Promise<Stream> {
        return await this.streamModel.findByIdAndUpdate(streamId, updateStreamDto, { new: true })
    }

    async deleteStream(streamId: string): Promise<Stream> {
        return await this.streamModel.findByIdAndDelete(streamId)
    }
}
