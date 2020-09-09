//Imports
const express = require('express');
const ejs = require('ejs');
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

//Database setup and Schemas

mongoose.connect('mongodb://localhost/message_dashboard', { useNewUrlParser: true });

const CommentSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Need a name to post"], minlength: [3, "Name needs to be at least 3 characters"] },
    comment: { type: String, required: [true, "Please add a comment for all to see"], minlength: [5, "Comment should be at least 5 characters"] }
}, { timestamps: true })

const MessageSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Need a name to post"], minlength: [3, "Name needs to be at least 3 characters"] },
    message: { type: String, required: [true, "Please add a message for all to see"], minlength: [10, "Message should be at least 10 characters"] },
    comments: [CommentSchema]
}, { timestamps: true })

const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);

//Configurations

app.use(session({
    secret: 'fakebook',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));


// Routes 

app.get("/", (req, res) => {

    Message.find()
        .then(msg => {
            res.render('index', { msg: msg })
        })
        .catch(err => res.redirect("/"))

})

app.post("/message", (req, res) => {

    msg = new Message()

    msg.name = req.body.name
    msg.message = req.body.message  // creates a new message
    msg.comments = []
    msg.save()
        .then(newmsg => {
            res.redirect('/')
        })
        .catch(err => {
            console.log('err', err)
        })

})

app.post("/comment/:_id", (req, res) => {

    Message.findOne({ _id: req.params._id })
        .then(message => {
            comment = new Comment()
            comment.name = req.body.name
            comment.comment = req.body.comment //creates a new comment but i need to attach it to the messages some way
            comment.save()
                .then(comment => {
                    message.comments.push(comment)
                    message.save()
                        .then(data => {
                            res.redirect("/")
                        })
                        .catch(err => res.redirect("/"))
                })
                .catch(err => res.redirect("/"))
        })
        .catch(err => res.redirect("/"))
})


app.listen(8000, () => { console.log("listening on port 8000") })
