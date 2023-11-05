import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({ timestamps: true})
export class Episodes {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Season"})
    season_id: number;

    @Prop({ required: true})
    name: string;

    @Prop({ required: true})
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "File"})
    thumbnail_id: number;
}

export const episodeSchema = SchemaFactory.createForClass(Episodes)