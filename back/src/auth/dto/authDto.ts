import {IsNotEmpty, MinLength} from "class-validator";

export class AuthDto {
    @IsNotEmpty()
    @MinLength(4)
    username: string

    @IsNotEmpty()
    @MinLength(4)
    password: string
}