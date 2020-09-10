const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const session = require('express-session')
const app = express();


require('./server/config/mongoose')



app.use(session({
    secret: "1955",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))


app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());
app.use(express.urlencoded({extended: true}));


require('./server/config/routes')(app)

app.listen(8000, () => {console.log("listening on port 8000")})