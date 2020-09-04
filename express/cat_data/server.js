const express = require("express");
const ejs = require("ejs");
const app = express();


app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views")

app.get('/cats', (req, res) => {
    res.render("cats")
})

app.get('/tom', (req,res) => {

    let kittens = {name: 'Tom', age: '5', food: ['mice', 'catnip', 'plants'], pic: 'images/cat1.png'}

    res.render("cuddles", {kittens:kittens}) 

})

app.get('/archie', (req,res) => {

    let kittens = {name: 'Archie', age: '2', food: ['lasagna', 'sushi', 'catnip'], pic: 'images/cat2.jpg'}

    res.render("cuddles", {kittens:kittens}) 

})

app.get('/hagrid', (req,res) => {

    let kittens = {name: 'Hagrid', age: '6', food: ['cheetos', 'fish', 'mice'], pic: 'images/cat3.jpeg'}

    res.render("cuddles", {kittens:kittens}) 

})


app.listen(8000, () => { console.log("listening on port 8000") })