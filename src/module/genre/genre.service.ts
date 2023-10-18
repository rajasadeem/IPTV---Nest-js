import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Genre } from 'src/interface/genre.interface';
import { CreateGenreDto } from './dto/create.genre.dto';
import { UpdateGenreDto } from './dto/update.genre.dto';

@Injectable()
export class GenreService {
    constructor(@InjectModel('Genre') private genreModel: Model<Genre>){}

    async addGenre(createGenreDto: CreateGenreDto): Promise<Genre>{
        try{
            const { name } = createGenreDto
            const genreExist = await this.genreModel.find({ name })
            if(genreExist.length > 0){
                throw new HttpException('Genre already exists', HttpStatus.BAD_REQUEST)
            }
            else{
                return await this.genreModel.create(createGenreDto)
            }
        }
        catch (error){
            throw error
        }
    }

    async getAllGenre(): Promise<Genre[]>{
        return await this.genreModel.find()
    }

    async getGenreById( genreId: string ): Promise<Genre[]>{
        return await this.genreModel.findById(genreId)
    }

    async updateGenre( genreId: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
        try{
            const { name } = updateGenreDto
            const genre = await this.genreModel.find({ name })
            if(genre.length > 0){
                throw new HttpException('Genre Name Duplicate', HttpStatus.BAD_REQUEST)
            }
            else{
                return await this.genreModel.findByIdAndUpdate(genreId, updateGenreDto, { new: true })
            }
        }
        catch(error){
            throw error
        }
    }

    async deleteGenre( genreId: string ): Promise<Genre>{
        return await this.genreModel.findByIdAndDelete(genreId)
    }
}
