import { Controller, Post, Get, Put, Delete, Res, Param, Body, HttpStatus } from '@nestjs/common';
import { SeasonService } from './season.service';
import { CreateSeasonDto } from './dto/create.season.dto';
import { API_STATUS_CODES, RESPONSE_MESSAGES } from 'src/constants/constants';
import { UpdateSeasonDto } from './dto/update.season.dto';

@Controller('season')
export class SeasonController {
    constructor(private readonly seasonService: SeasonService){}

    @Post()
    async addSeason(@Res() response , @Body() createSeasonDto: CreateSeasonDto){
        try{
            const season = await this.seasonService.addSeason(createSeasonDto)
            response.status(HttpStatus.CREATED).json({
                statu: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Season Created Successfully",
                data: season
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

    @Get()
    async getAllSeason(@Res() response ){
        try{
            const season = await this.seasonService.getAllSeason()
            response.status(HttpStatus.OK).json({
                statu: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "All Seasons Record",
                data: season
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

    @Get("/:id")
    async getSeasonById(@Res() response , @Param('id') seasonId: string){
        try{
            const season = await this.seasonService.getSeasonById(seasonId)
            response.status(HttpStatus.OK).json({
                statu: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Season record found",
                data: season
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

    @Put("/:id")
    async updateSeason(@Res() response , @Param('id') seasonId: string, @Body() updateSeasonDto: UpdateSeasonDto){
        try{
            const season = await this.seasonService.updateSeason(seasonId, updateSeasonDto)
            response.status(HttpStatus.CREATED).json({
                statu: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Season record updated succesfully",
                data: season
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

    @Delete("/:id")
    async deleteSeason(@Res() response , @Param('id') seasonId: string){
        try{
            const season = await this.seasonService.deleteSeason(seasonId)
            response.status(HttpStatus.OK).json({
                statu: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Season deleted Successfully",
                data: season
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
