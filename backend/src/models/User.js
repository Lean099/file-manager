import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {type: String, required: true},
    occupation: String,
    avatar: String,
    avatar_public_id: String,
    email: {type: String, required: true},
    password: {type: String, required: true},
    files: [{type: Schema.Types.ObjectId, ref: 'File'}]
})

export default model('User', userSchema);