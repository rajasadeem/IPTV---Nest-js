import { IsString, IsNotEmpty, MaxLength, MinLength, IsEmail } from "class-validator";

export class  CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    first_name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    last_name: string;

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
