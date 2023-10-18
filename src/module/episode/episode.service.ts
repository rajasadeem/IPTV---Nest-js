import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Episode } from 'src/interface/episode.interface';
import { CreateEpisodeDto } from './dto/create.episode.dto';
import { UpdateEpisodeDto } from './dto/update.episode.dto';
@Injectable()
export class EpisodeService {
    constructor(@InjectModel('Episode') private readonly episodeModel: Model<Episode>){}

    async addEpisode(createEpisodeDto: CreateEpisodeDto): Promise<Episode>{
        return await this.episodeModel.create(createEpisodeDto)
    }

    async getAllEpisode(): Promise<Episode[]>{
        return await this.episodeModel.find()
    }

    async getEpisodeById(episodeId: string): Promise<Episode[]>{
        return await this.episodeModel.findById(episodeId)
    }

    async updateEpisode(episodeId: string, updateEpisodeDto: UpdateEpisodeDto): Promise<Episode>{
        return await this.episodeModel.findByIdAndUpdate(episodeId, updateEpisodeDto, { new: true })
    }

    async deleteEpisode(episodeId: string): Promise<Episode>{
        return await this.episodeModel.findByIdAndDelete(episodeId)
    }
}
