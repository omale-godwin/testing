import {
  MongooseModuleOptions,
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type YokaiAirdropDocument = YokaiAirdrop & Document;

@Schema()
export class YokaiAirdrop {
 
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  walletaddress: string;

  @Prop()
  discord: string;

  @Prop()
  otppasskey: number;

  @Prop({default: false})
  isEmailVery: boolean;
}

export const YokaiAirdropSchema = SchemaFactory.createForClass(YokaiAirdrop);
