import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Series } from 'src/interface/series.interface';
import { CreateSeriesDto } from './dto/create.series.dto';
import { UpdateSeriesDto } from './dto/update.series.dto';

@Injectable()
export class SeriesService {
    constructor(@InjectModel('Series') private seriesModel: Model<Series>) { }

    async addSeries(createSeriesDto: CreateSeriesDto): Promise<Series> {
        return await this.seriesModel.create(createSeriesDto)
    }

    async getAllSeries(): Promise<Series[]> {
        return this.seriesModel.find()
    }

    async getSeriesById(seriesId: string): Promise<Series[]> {
        return await this.seriesModel.findById(seriesId)
    }

    async updateSeries(seriesId: string, updateSeriesDto: UpdateSeriesDto): Promise<Series> {
        return await this.seriesModel.findByIdAndUpdate(seriesId, updateSeriesDto, { new: true })
    }

    async deleteSeries(seriesId: string): Promise<Series> {
        return await this.seriesModel.findByIdAndDelete(seriesId)
    }
}
