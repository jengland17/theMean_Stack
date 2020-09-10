const peoples = require('../controllers/peoples')


module.exports = function(app) {

    app.get('/', (req,res) => {
        peoples.index(req,res)
    })

    app.get('/new/:name', (req,res) => {
        peoples.newperson(req,res)
    })

    app.get('/remove/:name', (req,res) => {
        peoples.removeperson(req,res)
    })

    app.get('/:name', (req,res) => {
        peoples.details(req,res)
    })

}