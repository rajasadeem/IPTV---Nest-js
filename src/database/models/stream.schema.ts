import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"

@Schema({ timestamps: true})
export class Streams {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Episode"})
    episode_id:  number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User"})
    user_id: number;

    @Prop({ required: true})
    time: string;
}

export const streamSchema = SchemaFactory.createForClass(Streams)