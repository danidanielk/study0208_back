import { HttpException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number) {
    if (value < 50) {
      throw new HttpException('value>50', 400);
    }
    return value;
  }
}
