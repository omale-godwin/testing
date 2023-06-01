import {
    Prop,
    Schema,
    SchemaFactory,
  } from '@nestjs/mongoose';
  import { Document } from 'mongoose';
  import * as mongoose from 'mongoose';
 
  export type ContactDocument = Contact & Document;
  
  @Schema({
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  })
  export class Contact {
    @Prop()
    name: string;
  
    @Prop()
    email: string;
  
    @Prop()
    type: string;
  
    @Prop()
    country: string;
  
    @Prop()
    know_about_us: string;
  
    @Prop()
    plateform?: string;
  
    @Prop()
    category?: string;
  
    @Prop()
    message: string;
  }
  
  export const ContactSchema = SchemaFactory.createForClass(Contact);
  ContactSchema.index({ post: 1, createdAt: 1 });
  ContactSchema.index({ post: 1 });