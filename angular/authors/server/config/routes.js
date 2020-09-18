const authors = require('../controllers/authors')

module.exports = function(app,path) {

    app.get('/', (req,res) => {

    })

    app.get('/author', (req,res) => {
        authors.index(req,res)
    })

    app.get('/author/:_id', (req,res) => {
        authors.findAuthor(req,res)
    })

    app.post('/author', (req,res) => {
        authors.create(req,res)
    })

    app.put('/edit/:_id', (req,res) => {
        authors.editAuthor(req,res)
    })

    app.delete('/delete/:_id', (req,res) => {
        authors.deleteAuthor(req,res)
    })

    app.all('*', (req,res) => {
        res.sendFile(path + '/index.html')
    })


}