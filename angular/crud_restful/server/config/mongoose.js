const fs = require('fs')
const path = require('path')
const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost/restful_api', {useNewUrlParser: true});

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})