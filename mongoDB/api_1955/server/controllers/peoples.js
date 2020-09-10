const { People } = require('../models/people')
const people = require('../models/people')

module.exports = {

    index: (req,res) => {
        People.find()
        .then(people => {
            res.json(people)
        })
        .catch(err => {
            res.json(err)
        })
    },

    newperson: (req,res) => {

        newperson = new People()
        newperson.name = req.params.name
        newperson.save()
        .then(people => {
            res.redirect('/')
        })
        .catch(err => {
            res.json(err)
        })

    },

    removeperson: (req,res) => {
        People.findOneAndRemove({name:req.params.name})
        .then(people => {
            res.redirect('/')
        })
        .catch(err => {
            res.json(err)
        })
    },

    details: (req,res) => {
        People.findOne({name:req.params.name})
        .then(people => {
            res.json(people)
        })
        .catch(err => {
            res.json(err)
        })
    }

}