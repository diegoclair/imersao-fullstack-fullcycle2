import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

//this name jwt is the same from PassportStrategy(Strategy, 'jwt') defined in jwt strategy file
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){}