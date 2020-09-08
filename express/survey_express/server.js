const express = require('express');
const ejs = require('ejs');
const session = require('express-session');
const app = express();

app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: "whats tatoes precious",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get('/', (req, res) => {
    res.render("index");
})


app.post("/form", (req, res) => {
    req.session.results = req.body;
    console.log(req.body);
    res.redirect("results");
})

app.get('/results', (req, res) => {
    res.render("results", { results: req.session.results });
})

app.get('/reset', (req, res) => {
    req.session.destroy();
    res.redirect('/')
})





app.listen(8000, () => { console.log("listening on port 8000") });