import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {CreateUserDto} from "../users/dto/create-user.dto";

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService) {
    }


    async validiateUser(username: string, password: string) {
        const user = await this.userService.findOneByName(username)
        if (!user ||  user.password !== password) return false
        return user
    }

    async login(user: any) {
        const payload = {user};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async registerUser(createUserDto: CreateUserDto){
        const newUser = await this.userService.create(createUserDto)
        return this.login(newUser)
    }

}
