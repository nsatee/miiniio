const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;
mongoose.Promise = Promise;

// define user schema
const postSchema = new Schema({
    title: { type: String },
    body: { type: String },
    post_images: {
        image_total: { type: Number },
        images: { type: Array }
    },
    date: { type: Date, default: Date.now() },
    user: {
        type: Schema.ObjectId,
        ref: "user"
    }
});

const Post = mongoose.model("post", postSchema, "posts");
module.exports = Post;
