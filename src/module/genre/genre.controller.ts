import { Controller, Post, Get, Put, Delete, Res, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create.genre.dto';
import { API_STATUS_CODES, RESPONSE_MESSAGES } from 'src/constants/constants';
import { UpdateGenreDto } from './dto/update.genre.dto';

@Controller('genre')
export class GenreController {
    constructor( private readonly genreService: GenreService){}

    @Post()
    async addGenre(@Res() response , @Body() createGenreDto: CreateGenreDto){
        try{
            const genre = await this.genreService.addGenre(createGenreDto)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Genre Added Successfully",
                data: genre
            })
        }
        catch (error) {
            if(error.message == "Genre already exists"){
                response.status(HttpStatus.BAD_REQUEST).json({
                    status: API_STATUS_CODES.ERROR_CODE,
                    response: RESPONSE_MESSAGES.DUPLICATE_GENRE,
                    message: "The provided genre already exists"
                })
            }
            else{
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                    response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                    message: "Error: Can't add!"
                })
            }
        }
    }

    @Get()
    async getAllGenre(@Res() response){
        try{
            const genre = await this.genreService.getAllGenre()
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "All Genre Recoed",
                data: genre
            })
        }
        catch(error){
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: "Error: Can't get!"
            })
        }
    }

    @Get("/:id")
    async getGenreById(@Res() response, @Param('id') genreId: string){
        try{
            const genre = await this.genreService.getGenreById(genreId)
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Genre record with the provided ID",
                data: genre
            })
        }
        catch(error){
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: "Error: Can't get!"
            })
        }
    }

    @Put("/:id")
    async updateGenre(@Res() response, @Param('id') genreId: string, @Body() updateGenreDto: UpdateGenreDto){
        try{
            const updatedGenre = await this.genreService.updateGenre( genreId, updateGenreDto)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Genre record updated successfully",
                data: updatedGenre
            })
        }
        catch(error){
            if(error.message == "Genre Name Duplicate"){
                response.status(HttpStatus.BAD_GATEWAY).json({
                    status: API_STATUS_CODES.ERROR_CODE,
                    response: RESPONSE_MESSAGES.DUPLICATE_GENRE,
                    message: "Cannot update to a genre name that already exists"
                })
            }
            else{
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                    response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                    message: error.message
                })
            }
        }
    }

    @Delete("/:id")
    async deleteGenre(@Res() response, @Param('id') genreID: string){
        try{
            const deleteGenre = await this.genreService.deleteGenre(genreID)
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Genre record deleted successfully",
                data: deleteGenre
            })
        }
        catch(error){
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: error.message
            })
        }
    }


}
