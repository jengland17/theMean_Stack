const { Author } = require('../models/author')


module.exports = {

    index: (req,res) => {
        Author.find()
        .then(author => {
            res.json(author)
        })
        .catch(err => {
            res.json(err)
        })
    },

    create: (req,res) => {
        newAuthor = new Author()
        newAuthor.name = req.body.name
        newAuthor.save()
        .then(author => {
            res.json(author)
        })
        .catch(err => {
            res.json(err)
        })
    },

    findAuthor: (req, res) => {
        Author.findOne({ _id: req.params._id })
            .then(author => {
                res.json(author)
            })
            .catch(err => {
                res.json(err)
            })
    },

    editAuthor: (req,res) => {
        Author.findOne({_id: req.params._id})
        .then(author => {
            author.name = req.body.name
            return author.save()
            .then(author => {
                res.json(author)
            })
            .catch(err => {
                res.json(err)
            })
        })
        .catch(err => {
            res.json(err)
        })
    },

    deleteAuthor: (req,res) => {
        Author.findOneAndRemove({_id: req.params._id})
        .then(author => {
            res.json(author)
        })
        .catch(err => {
            res.json(err)
        })
    }

}