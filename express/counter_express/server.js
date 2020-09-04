const express = require("express");
const ejs = require("ejs");
const session = require("express-session");
const { request } = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views")

app.use(session({
    secret: "this is a counter",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))


app.get('/', (req, res) => {

    if (!req.session.counter) {
        req.session.counter = 1;
    }

    else {
        req.session.counter += 1;
    }

    res.render("index", { counter: req.session.counter })

})

app.get('/addTwo', (req, res) => {

    req.session.counter += 1;

    res.redirect('/');

})

app.get('/reset', (req, res) => {

    req.session.destroy();

    res.redirect('/')

})





app.listen(8000, () => { console.log("listening on port 8000") })