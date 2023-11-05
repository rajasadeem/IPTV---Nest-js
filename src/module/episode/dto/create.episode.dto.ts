import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Document } from "mongoose";

export class CreateEpisodeDto extends Document{

    @IsNumber()
    @IsNotEmpty()
    readonly season_id: number;

    @IsString()
    @IsNotEmpty()
    readonly nmae: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    thumbnail_id: string;
    
}