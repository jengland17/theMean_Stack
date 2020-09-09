const quotes = require('../controllers/quotes')

module.exports = function (app) {

    app.get("/", (req, res) => {
        quotes.index(req, res)
    })

    app.get("/quotes", (req, res) => {
        quotes.allquotes(req, res)
    })    
    
    app.post("/addQuote", (req, res) => {
        quotes.makequote(req, res)
    })

}