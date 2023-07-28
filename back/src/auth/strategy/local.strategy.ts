import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local"
import {AuthService} from "../auth.service";


@Injectable()
export class LocalStategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: "username",
        });
    }

    async validate(username, password) {
        const user = await this.authService.validiateUser(username, password)
        if (user === null) {
            throw new UnauthorizedException()
        }
        return user
    }
}