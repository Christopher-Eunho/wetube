import mongoose, { MongooseDocument } from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is requirerd"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Video" // use the object ID from "Video"
    }
})

const model = mongoose.model("Comment", CommentSchema);
export default model;