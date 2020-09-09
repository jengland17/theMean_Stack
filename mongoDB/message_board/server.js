//Imports
const express = require('express');
const ejs = require('ejs');
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

//Database setup and Schemas

mongoose.connect('mongodb://localhost/message_dashboard', {useNewUrlParser: true});

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [3, "Name needs to be at least 3 characters"]},
    comment: {type: String, required: true, minlength: [5, "Comment should be at least 5 characters"]}
}, {timestamps: true})

const MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [3, "Name needs to be at least 3 characters"]},
    message: {type: String, required: true, minlength: [10, "Message should be at least 10 characters"]},
    comments: [CommentSchema]
}, {timestamps: true})

const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);

//Configurations

app.use(session({
    secret: 'fakebook',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({extended: true}));


// Routes 

app.get("/", (req,res) => {
    res.render("index")
})

app.post("/message", (req,res) => {
    
    newmessage = new Message()

    newmessage.name = req.body.name
    newmessage.message = req.body.message
    newmessage.save()
    .then(data => {
        res.redirect("/")
    })
    .catch(err => {
        console.log('err', err)
    })
    
})

app.post("/comment", (req,res) => {

    newcomment = new Comment()

    newcomment.name = req.body.name
    newcomment.comment = req.body.comment
    newcomment.save()
    .then(data => {
        res.redirect("/")
    })
    .catch(err => {
        console.log('err', err)
    })

})


app.listen(8000, () => {console.log("listening on port 8000")})
