import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Document } from "mongoose";

export class CreateStreamDto extends Document{

    @IsNumber()
    @IsNotEmpty()
    readonly episode_id: number;

    @IsNumber()
    @IsNotEmpty()
    readonly user_id: number;

    @IsString()
    @IsNotEmpty()
    readonly time: string;
}