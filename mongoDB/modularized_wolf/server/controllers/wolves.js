const { Wolf } = require('../models/wolf')

module.exports = {

    index: (req,res) => {
        Wolf.find()
    
        .then(wolves => {
            res.render("index", {wolves: wolves});
        })
        .catch(err => res.json(err));
    },

    newwolf: (req,res) => {
        res.render("addwolf");
    },

    addwolf: (req,res) => {
        newwolf = new Wolf()
        newwolf.name = req.body.name
        newwolf.location = req.body.location
        newwolf.fact = req.body.fact
        newwolf.save()
            .then(data => {
                console.log(data)
                res.redirect("/")
            })
            .catch(err => {
                console.log('err', err)
            })
    },

    onewolf: (req,res) => {
        Wolf.findOne({_id: req.params._id})
            
        .then(wolves => {
            res.render("wolf", {wolves:wolves});
        })
        .catch(err => res.json(err))
    },

    editpage: (req,res) => {
        Wolf.findOne({_id: req.params._id})
    
        .then(wolves => {
            res.render("editWolf", {wolves:wolves});
        })
        .catch(err => res.json(err));
    },

    editwolf: (req,res) => {
        Wolf.findOne({_id: req.params._id})
    
        .then(wolves => {
            wolves.name = req.body.name
            wolves.location = req.body.location
            wolves.fact = req.body.fact
            return wolves.save();
        })
        .then(wolves => {
            console.log(wolves)
            res.redirect("/")
        })
        .catch(err => res.json(err));
    },

    deletewolf: (req,res) => {
        Wolf.findOneAndRemove({_id: req.params._id})
        .then(wolves => {
            res.redirect("/")
        })
        .catch(err => res.json(err))
    }

}