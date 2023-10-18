import { Controller, Post, Get, Put, Delete, Res, Param, Body, HttpStatus } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create.file.dto';
import { API_STATUS_CODES, RESPONSE_MESSAGES } from 'src/constants/constants';
import { UpdateFileDto } from './dto/update.file.dto';

@Controller('file')
export class FileController {
    constructor(private readonly fileService: FileService){}

    @Post()
    async addFile(@Res() response, @Body() createFileDto: CreateFileDto ){
        try{
            const file = await this.fileService.addFile(createFileDto)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "File record added successfully",
                data: file
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
    async getAllFile(@Res() response){
        try{
            const files = await this.fileService.getAllfile()
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "All files record",
                data: files
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
    async getFileById(@Res() response, @Param('id') fileId: string ){
        try{
            const file = await this.fileService.getFileById(fileId)
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "file record found with the provided file ID",
                data: file
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
    async updaetFile(@Res() response, @Param('id') fileId: string, @Body() updateFileDto: UpdateFileDto ){
        try{
            const file = await this.fileService.updateFile(fileId, updateFileDto)
            response.status(HttpStatus.CREATED).json({
                status: API_STATUS_CODES.CREATED,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "file record updated",
                data: file
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
    async deleteFile(@Res() response , @Param('id') fileId: string){
        try{
            const file = await this.fileService.deleteFile(fileId)
            response.status(HttpStatus.OK).json({
                status: API_STATUS_CODES.SUCCESS,
                response: RESPONSE_MESSAGES.SUCCESS,
                message: "file record deleted successfully",
                data: file
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
