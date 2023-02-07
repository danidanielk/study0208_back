import { Injectable } from '@nestjs/common';
import { CatsRepository } from 'src/cats/cats.repository';

@Injectable()
export class AuthService {
  constructor(private catRepository: CatsRepository) {}
async jwtLogIn(data:)
}
