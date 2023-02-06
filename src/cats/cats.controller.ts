import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.intercepter';
import { PositiveIntPipe } from 'src/common/pipeTest/pipes/positiveInt.pipe';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get('/test')
  getAllCat() {
    // throw new HttpException('엘ㄹ러', 403); 직접 에러코드 넣어 익셉션.
    return 'all cat';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    //getOneCat(@Param() param) 이렇게 사용하면 key : value 형식.
    //getOneCat(@Param('id') param) 이렇게 사용하면 value 만.
    console.log(param);
    console.log(typeof param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'updeate';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete';
  }
}
