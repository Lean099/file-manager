import { Schema, model } from "mongoose";

const fileSchema = new Schema({
    name: String,
    format: String,
    size: Number,
    public_id: String,
    url: String,
    userProperty: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})

export default model('File', fileSchema)