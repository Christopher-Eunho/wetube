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
        ref:"Video" // use(find) the object ID from "Video"
    }, // This is how to relate vidoes with comments
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const model = mongoose.model("Comment", CommentSchema);
export default model;