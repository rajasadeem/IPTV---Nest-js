import { Document } from "mongoose";

export interface Series extends Document {
    readonly name: string,
    readonly description: string,
    readonly trailer_id: number,
    readonly thumbnail_id: number,
}