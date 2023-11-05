import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

@Schema({ timestamps: true})
export class GenreSeries {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Genre"})
    genre_id: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Series"})
    series_id: number;
}

export const genreSeriesSchema = SchemaFactory.createForClass(GenreSeries)
