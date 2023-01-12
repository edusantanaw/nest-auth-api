import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
