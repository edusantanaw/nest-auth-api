import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserSchema = HydratedDocument<User>;

@Schema()
export class User {
  @Prop([String])
  name: string;

  @Prop([String])
  email: string;

  @Prop([String])
  password: string;
}

export const userSchema = SchemaFactory.createForClass(User);
