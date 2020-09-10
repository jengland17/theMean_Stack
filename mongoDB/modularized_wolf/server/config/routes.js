const wolves = require('../controllers/wolves')


module.exports = function (app) {

    app.get('/', (req,res) => {
        wolves.index(req,res)
    })
    
    app.get('/wolves/new', (req,res) => {
        wolves.newwolf(req,res)
    })
    
    app.post("/wolves", (req,res) => {
        wolves.addwolf(req,res)
    })
    
    app.get("/wolves/:_id", (req,res) => {
        wolves.onewolf(req,res)
    })
    
    app.get("/wolves/edit/:_id", (req, res) => {
        wolves.editpage(req,res)
    })
    
    app.post("/wolves/:_id", (req,res) => {
        wolves.editwolf(req,res)
    })
    
    app.post("/wolves/destroy/:_id", (req,res) => {
        wolves.deletewolf(req,res)
    })

}