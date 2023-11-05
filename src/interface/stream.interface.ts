import { Document } from "mongoose";

export interface Stream extends Document {
    readonly episode_id: number,
    readonly user_id: number,
    readonly time: string,
}