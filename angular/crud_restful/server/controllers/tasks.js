const { Task } = require('../models/task')


module.exports = {

    index: (req, res) => {
        Task.find()
            .then(task => {
                res.json({'task': task})
            })
            .catch(err => {
                res.json(err)
            })
    },

    findtask: (req, res) => {
        Task.findOne({ _id: req.params._id })
            .then(task => {
                res.json(task)
            })
            .catch(err => {
                res.json(err)
            })
    },

    maketask: (req, res) => {
        newtask = new Task()
        newtask.title = req.body.title
        newtask.description = req.body.description
        newtask.completed = req.body.completed
        newtask.save()
            .then(task => {
                res.json(task)
            })
            .catch(err => {
                res.json(err)
            })
    },

    updatetask: (req, res) => {
        Task.findOne({ _id: req.params._id })
            .then(task => {
                task.title = req.body.title
                task.description = req.body.description
                task.completed = req.body.completed
                return task.save()
                    .then(task => {
                        res.json(task)
                    })
                    .catch(err => {
                        res.json(err)
                    })
            })
            .catch(err => {
                res.json(err)
            })
    },

    deletetask: (req, res) => {
        Task.findOneAndRemove({ _id: req.params._id })
            .then(task => {
                res.json(task)
            })
            .catch(err => {
                res.json(err)
            })
    }

}