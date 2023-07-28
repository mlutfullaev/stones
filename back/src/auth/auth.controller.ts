
import {Body, Controller, Get, Post, Request, UseGuards,Response} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {LocalAuthGuard} from "./guards/local-auth.guard";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";
import {Me} from "./guards/me.guard";



@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Request() req) {
        return this.authService.login(req.user)
    }


    @Get('profile')
    @UseGuards(JwtAuthGuard)
    profile(@Me() me) {
        return me
    }

    @Post('register')
    register(@Body() createUserDto: CreateUserDto){
        return this.authService.registerUser(createUserDto)
    }
}
