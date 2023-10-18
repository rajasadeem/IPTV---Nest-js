import { Document } from "mongoose";

export interface File extends Document {
    readonly original_name: string,
    readonly current_name: string,
    readonly type: string,
    readonly path: string,
    readonly size: string,
}