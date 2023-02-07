import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator/types/decorator/decorators';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat extends Document {
  @Prop({
    required: true, // not null
    unique: true, // primary key ?
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop()
  @IsString()
  imgUri: string;
}
export const CatSchema = SchemaFactory.createForClass(Cat);
