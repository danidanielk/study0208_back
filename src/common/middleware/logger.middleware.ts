import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP'); // <<< http 받아옴..
  use(req: Request, res: Response, next: NextFunction) {
    // reponse까지 받아 올 수있다.
    res.on('finish', () => {
      this.logger.log('middleware 입니다.');
    });
    next();
  }
}
