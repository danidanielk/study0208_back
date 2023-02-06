import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return (
      next
        .handle()
        //아래 코드 수정
        .pipe(
          map((data) => ({
            success: true,
            data,
          })),
        )
    );
  }
}
