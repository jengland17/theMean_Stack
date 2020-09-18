const { Note } = require('../models/note');


module.exports = {

    index: (req,res) => {
        Note.find()
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.json(err)
        })
    },

    create: (req,res) => {
        newnote = new Note()
        newnote.note = req.body.note
        newnote.save()
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.json(err)
        })
    }


}