
const { Cake } = require("../models/cake")
const { Comment } = require("../models/cake")

module.exports = {

    //display all cakes
    index: (req,res) => {
        Cake.find()
        .then(cake => {
            res.json(cake)
        })
        .catch(err => {
            res.json(err)
        })
    },

    details: (req,res) => {
        Cake.findOne({_id: req.params._id})
        .then(cake => {
            res.json(cake)
        })
        .catch(err => {
            res.json(err)
        })
    },
    
    //create a new cake
    addCake: (req,res) => {
        newcake = new Cake()
        newcake.name = req.body.name
        newcake.image = req.body.image
        newcake.save()
        .then(cake => {
            res.json(cake)
        })
        .catch(err => {
            res.json(err)
        })
    },

    //comment and give rating to each cake (findOne)
    addComment: (req,res) => {
        Cake.findOne({_id: req.params._id})
        .then(cake => {
            newcomment = new Comment()
            newcomment.comment = req.body.comment
            newcomment.rating = req.body.rating
            newcomment.save()
            .then(comment => {
                cake.comments.push(comment)
                cake.save()
                .then(data => {
                    res.json(data)
                })
                .catch(err => {
                    res.json(err)
                })
            })
            .catch(err => {
                res.json(err)
            })
        })
        .catch(err => {
            res.json(err)
        })
    }

}