import { Document } from "mongoose";

export interface Season extends Document {
    readonly series_id: number,
    readonly name: string,
    readonly description: string,
}