const { Quote } = require('../models/quote')
const moment = require('moment')

module.exports = {

    index: (req, res) => {
        res.render('index')
    },

    allquotes: (req, res) => {
        Quote.find()

            .then(quotes => {
                res.render("quotes", { info: quotes, moment: moment })
            })

            .catch(err => res.json(err))
    },

    makequote: (req, res) => {
        newquote = new Quote()
        newquote.name = req.body.name
        newquote.quote = req.body.quote
        newquote.save()
            .then(data => {
                console.log(data)
                res.redirect("/quotes")
            })
            .catch(err => {
                console.log('err', err)
                for (var key in err.errors) {
                    req.flash("form", err.errors[key].message)
                }
                res.redirect("/")
            })
    }
}