const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [3, "Please provide a name that is atleast 3 characters"]},
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = {
    Author: Author,
    AuthorSchema: AuthorSchema
}