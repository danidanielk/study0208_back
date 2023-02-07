import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtlAuthGuard extends AuthGuard('jwt') {}
