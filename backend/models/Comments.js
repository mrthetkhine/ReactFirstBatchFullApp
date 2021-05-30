//Filename: Posts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentsSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Posts"
    },
    date: {
        type: Date,
        default: Date.now,
    }
});
module.exports = mongoose.model('Comments', CommentsSchema)