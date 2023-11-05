import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Document } from "mongoose";

export class CreateSeriesDto extends Document{

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    readonly trailer_id: number;

    @IsNumber()
    @IsNotEmpty()
    readonly thumbnail_id: number;
}