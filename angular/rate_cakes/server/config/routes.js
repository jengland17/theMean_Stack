const cakes = require("../controllers/cakes")


module.exports = function(app) {

    //display all cakes
    app.get("/cakes", (req,res) => {
        cakes.index(req,res)
    })
    
    //Specific cake 
    app.get("/cakes/:_id", (req,res) => {
        cakes.details(req,res)
    })

    //create a new cake
    app.post("/cakes", (req,res) => {
        cakes.addCake(req,res)
    })

    //comment and give rating to each cake
    app.post("/cakes/:_id", (req,res) => {
        cakes.addComment(req,res)
    })

}