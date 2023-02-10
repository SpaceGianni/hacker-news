import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class News extends Document {
  @Prop({ index: true, unique: true })
  story_id: number;

  @Prop()
  created_at: string;

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  url: string;

  @Prop({ default: null })
  delete_date: Date;
}

export const HackerNewsSchema = SchemaFactory.createForClass(News);
