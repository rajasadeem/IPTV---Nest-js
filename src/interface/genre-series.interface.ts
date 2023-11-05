import { Document } from "mongoose";

export interface GenreSeries extends Document {
    readonly genre_id: number,
    readonly series_id: number,
}