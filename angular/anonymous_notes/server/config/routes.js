const notes = require('../controllers/notes');


module.exports = function(app) {

    app.get('/', (req,res) => {

    })

    app.get('/notes', (req,res) => {
        //display all notes
        notes.index(req,res)
    })

    app.post('/notes', (req,res) => {
        //add notes
        notes.create(req,res)
    })









}