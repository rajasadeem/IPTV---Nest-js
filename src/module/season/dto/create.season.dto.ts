import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Document } from "mongoose";

export class CreateSeasonDto extends Document{

    @IsNumber()
    @IsNotEmpty()
    readonly series_id: number;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;
}