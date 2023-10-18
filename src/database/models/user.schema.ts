import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true})
export class User {
    @Prop({ required: true})
    first_name: string;

    @Prop({ required: true})
    last_name: string;

    @Prop({ required: true})
    email: string;

    @Prop({ required: true})
    password: string;
}

export const userSchema = SchemaFactory.createForClass( User )