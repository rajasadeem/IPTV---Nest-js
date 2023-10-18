import { Controller, Post, Get, Put, Delete, Res, Param, Body, HttpStatus, UseGuards } from '@nestjs/common';
import { StreamService } from './stream.service';
import { CreateStreamDto } from './dto/create.stream.dto';
import { API_STATUS_CODES, RESPONSE_MESSAGES } from 'src/constants/constants';
import { UpdateStreamDto } from './dto/update.stream.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('stream')
export class StreamController {
    constructor(private readonly streamService: StreamService){}

    @UseGuards(AuthGuard)
    @Post()
    async addStream(@Res() response , @Body() createStreamDto: CreateStreamDto){
        try{
            const stream = await this.streamService.addStream(createStreamDto)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Stream created successfully",
                data: stream
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

    @UseGuards(AuthGuard)
    @Get()
    async getAllStream(@Res() response ){
        try{
            const stream = await this.streamService.getAllStream()
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "All streams record",
                data: stream
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

    @UseGuards(AuthGuard)
    @Get("/:id")
    async getStreamById(@Res() response , @Param('id') streamId: string){
        try{
            const stream = await this.streamService.getStreamById(streamId)
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Stream record found",
                data: stream
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

    @UseGuards(AuthGuard)
    @Put("/:id")
    async updateStream(@Res() response , @Param('id') streamId: string, @Body() updateStreamDto: UpdateStreamDto){
        try{
            const stream = await this.streamService.updateStream(streamId, updateStreamDto)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Stream updated successfully",
                data: stream
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

    @UseGuards(AuthGuard)
    @Delete("/:id")
    async deleteStream(@Res() response , @Param('id') streamId: string){
        try{
            const stream = await this.streamService.deleteStream(streamId)
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "Stream deleted successfully",
                data: stream
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
