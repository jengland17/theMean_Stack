const mongoose = require("mongoose");

//Comment Schema
// with rating and a comment 

const CommentSchema = new mongoose.Schema({
    comment: {type: String, required:[true, "Need a comment to post"], minlength: [10, "Comment needs to be at least 10 characters"]},
    rating: {type: Number, required: [true, "Please give a rating"]}
}, {timestamps: true})

//Cake schema
// baker, image, and comment

const CakeSchema = new mongoose.Schema({
    name: {type: String, required:[true, "Please provide a name"], minlength: [3, "Name needs to be at least 3 characters"]}, 
    image: {type: String},
    comments: [CommentSchema]
})

const Comment = mongoose.model('Comment', CommentSchema)
const Cake = mongoose.model('Cake', CakeSchema)

module.exports = {
    Comment: Comment,
    CommentSchema: CommentSchema,
    Cake: Cake,
    CakeSchema: CakeSchema
}