const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const flash = require("express-flash");
const moment = require("moment");
const session = require('express-session');
const app = express();

mongoose.connect('mongodb://localhost/quoting_dojo', {useNewUrlParser: true});


const QuoteSchema = new mongoose.Schema({

    name: {type: String, required: true, minlength: [3, "Name needs to be at least 3 characters"]},
    quote: {type: String, required: true, minlength: [10, "Quote needs at least 10 characters"]}

}, {timestamps: true});

const Quote = mongoose.model('Quote', QuoteSchema);


app.use(session({
    secret: "whats tatoes precious",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(flash());
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.render("index")
})

app.post("/addQuote", (req,res) => {

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
})

app.get("/quotes", (req,res) => {

    Quote.find()

    .then(quotes => {
        res.render("quotes", {info: quotes, moment: moment})
    })

    .catch(err => res.json(err))

})




app.listen(8000, () => {console.log("listening on port 8000")})