import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"

@Schema({ timestamps: true})
export class Series {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "File" })
    trailer_id: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "File"})
    thumbnail_id: number
}

export const seriesSchema = SchemaFactory.createForClass(Series)