import { IsNotEmpty, IsString } from "class-validator";
import { Document } from "mongoose";

export class CreateFileDto extends Document{
    @IsString()
    @IsNotEmpty()
    readonly original_name: string;

    @IsString()
    @IsNotEmpty()
    readonly current_name: string;

    @IsString()
    @IsNotEmpty()
    readonly type: string;

    @IsString()
    @IsNotEmpty()
    readonly path: string;

    @IsString()
    @IsNotEmpty()
    readonly size: string;
}