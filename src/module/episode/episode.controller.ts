import { Controller, Post, Get, Put, Delete, Res, Param, Body, HttpStatus } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { CreateEpisodeDto } from './dto/create.episode.dto';
import { API_STATUS_CODES, RESPONSE_MESSAGES } from 'src/constants/constants';
import { UpdateEpisodeDto } from './dto/update.episode.dto';

@Controller('episode')
export class EpisodeController {
    constructor(private readonly episodeService: EpisodeService) { }

    @Post()
    async addEpisode(@Res() response, @Body() createEpisodeDto: CreateEpisodeDto) {
        try {
            const episode = await this.episodeService.addEpisode(createEpisodeDto)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Episode added successfully",
                data: episode
            })
        }
        catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: error.message
            })
        }
    }

    @Get()
    async getAllEpisode(@Res() response) {
        try {
            const episode = await this.episodeService.getAllEpisode()
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "All episodes record",
                data: episode
            })
        }
        catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: error.message
            })
        }
    }

    @Get("/:id")
    async getEpisodeById(@Res() response, @Param('id') episodeId: string) {
        try {
            const episode = await this.episodeService.getEpisodeById(episodeId)
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Episode record found",
                data: episode
            })
        }
        catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: error.message
            })
        }
    }

    @Put("/:id")
    async updateEpisode(@Res() response, @Param('id') episodeId: string, @Body() updateEpisodeDto: UpdateEpisodeDto) {
        try {
            const episode = await this.episodeService.updateEpisode(episodeId, updateEpisodeDto)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Episode updated successfully",
                data: episode
            })
        }
        catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: error.message
            })
        }
    }

    @Delete("/:id")
    async deleteEpisode(@Res() response, @Param('id') episodeId: string) {
        try {
            const episode = await this.episodeService.deleteEpisode(episodeId)
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Episode deleted successfully",
                data: episode
            })
        }
        catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: API_STATUS_CODES.INTERNAL_SERVER_ERROR,
                response: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
                message: error.message
            })
        }
    }
}
