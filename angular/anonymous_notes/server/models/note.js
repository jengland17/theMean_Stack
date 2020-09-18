const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    note: {type: String, required: true, minlength: [3, "Please provide a note that is atleast 3 characters"]}
}, {timestamps: true})

const Note = mongoose.model('Note', NoteSchema);

module.exports = {
    Note:Note,
    NoteSchema:NoteSchema
}