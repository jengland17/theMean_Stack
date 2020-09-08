const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const flash = require("express-flash");
const session = require("express-session");
const app = express();

mongoose.connect('mongodb://localhost/wolf_dashboard', {useNewUrlParser: true});

const WolfSchema = new mongoose.Schema({

    name: {type: String, required: true, minlength: [3, "Name needs at least 3 characters"]},
    location: {type: String, required: true, minlength: [3, "Location needs at least 3 characters"]},
    fact: {type: String, required: true, minlength: [10, "fact needs at least 10 characters"]}

}, {timestamps: true})

const Wolf = mongoose.model('Wolf', WolfSchema);


app.use(session({
    secret: "howl",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.use(flash());
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({extended: true}));


app.get('/', (req,res) => {

    Wolf.find()

        .then(wolves => {
            res.render("index", {wolves: wolves});
        })
        .catch(err => res.json(err));

})

app.get('/wolves/new', (req,res) => {
    res.render("addwolf");
})

app.post("/wolves", (req,res) => {

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
})

app.get("/wolves/:_id", (req,res) => {

    Wolf.findOne({_id: req.params._id})
        
        .then(wolves => {
            res.render("wolf", {wolves:wolves});
        })
        .catch(err => res.json(err));

})

app.get("/wolves/edit/:_id", (req, res) => {

    Wolf.findOne({_id: req.params._id})

        .then(wolves => {
            res.render("editWolf", {wolves:wolves});
        })
        .catch(err => res.json(err));
})

app.post("/wolves/:_id", (req,res) => {

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
})

app.post("/wolves/destroy/:_id", (req,res) => {

    Wolf.findOneAndRemove({_id: req.params._id})
    .then(wolves => {
        res.redirect("/")
    })
    .catch(err => res.json(err))

})




app.listen(8000, () => {console.log("listening on port 8000")})