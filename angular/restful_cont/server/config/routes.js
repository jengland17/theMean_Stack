const tasks = require('../controllers/tasks')



module.exports = function(app) {

    app.get('/tasks', (req,res) => {
        tasks.index(req,res)
    })

    app.get('/tasks/:_id', (req,res) => {
        tasks.findtask(req,res)
    })

    app.post('/tasks', (req,res) => {
        tasks.maketask(req,res)
    })

    app.put('/tasks/:_id', (req,res) => {
        tasks.updatetask(req,res)
    })

    app.delete('/tasks/:_id', (req,res) => {
        tasks.deletetask(req,res)
    })

}