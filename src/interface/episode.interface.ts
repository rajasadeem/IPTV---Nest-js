import { Document } from "mongoose";

export interface Episode extends Document {
    readonly season_id: number,
    readonly name: string,
    readonly description: string,
    readonly thumbnail_id: number,
}