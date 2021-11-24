import { Schema, model } from "mongoose";

const fileSchema = new Schema({
    name: String,
    format: String,
    size: Number,
    public_id: String,
    userProperty: Schema.Types.ObjectId
})

export default model('File', fileSchema)