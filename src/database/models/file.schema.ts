import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true})
export class File {
    @Prop({ required: true})
    original_name: string;

    @Prop({ required: true})
    current_name: string;

    @Prop({ required: true})
    type: string;

    @Prop({ required: true})
    path: string;

    @Prop({ required: true})
    size: string;
}

export const fileSchema = SchemaFactory.createForClass(File)