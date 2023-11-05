import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UserLoginDto{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}