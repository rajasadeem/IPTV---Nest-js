import { Controller, Post, Get, Put, Delete, Res, Param, Body, HttpStatus } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create.series.dto';
import { API_STATUS_CODES, RESPONSE_MESSAGES } from 'src/constants/constants';
import { UpdateSeriesDto } from './dto/update.series.dto';

@Controller('series')
export class SeriesController {
    constructor(private readonly seriesService: SeriesService) { }

    @Post()
    async addSeries(@Res() response, @Body() createSeriesDto: CreateSeriesDto) {
        try {
            const series = await this.seriesService.addSeries(createSeriesDto)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Series Record Created Successfully",
                data: series
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
    async getAllSeries(@Res() response) {
        try {
            const series = await this.seriesService.getAllSeries()
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "All series record",
                data: series
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
    async getSeriesById(@Res() response, @Param('id') seriesId: string) {
        try {
            const series = await this.seriesService.getSeriesById(seriesId)
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Series record found",
                data: series
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
    async updateSeries(@Res() response, @Param('id') seriesId: string, @Body() updateSeriesDto: UpdateSeriesDto) {
        try {
            const series = await this.seriesService.updateSeries(seriesId, updateSeriesDto)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "series updated successfully",
                data: series
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
    async deleteSeries(@Res() response, @Param('id') seriesId: string) {
        try {
            const series = await this.seriesService.deleteSeries(seriesId)
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "series deleted successfully",
                data: series
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
