import { Document } from "mongoose";

export interface Genre extends Document {
    readonly name: string;
}