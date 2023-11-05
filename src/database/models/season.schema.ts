import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"

@Schema({ timestamps: true})
export class Season {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Series"})
    series_id: number;

    @Prop({ required: true})
    name: string;

    @Prop({ required: true})
    description: string;
}

export const seasonSchema = SchemaFactory.createForClass(Season)