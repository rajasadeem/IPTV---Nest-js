import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Season } from 'src/interface/season.interface';
import { CreateSeasonDto } from './dto/create.season.dto';
import { UpdateSeasonDto } from './dto/update.season.dto';

@Injectable()
export class SeasonService {
    constructor(@InjectModel('Season') private seasonModel: Model<Season>){}

    async addSeason(createSeasonDto: CreateSeasonDto): Promise<Season>{
        return await this.seasonModel.create(createSeasonDto)
    }

    async getAllSeason(): Promise<Season[]>{
        return await this.seasonModel.find()
    }

    async getSeasonById( seasonId: string): Promise<Season[]>{
        return await this.seasonModel.findById(seasonId)
    }

    async updateSeason( seasonId: string, updateSeasonDto: UpdateSeasonDto): Promise<Season>{
        return await this.seasonModel.findByIdAndUpdate(seasonId, updateSeasonDto, { new: true})
    }

    async deleteSeason( seasonId: string): Promise<Season>{
        return await this.seasonModel.findByIdAndDelete(seasonId)
    }
}
