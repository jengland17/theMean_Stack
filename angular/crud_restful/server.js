const express = require('express')
const mongoose = require('mongoose')
const app = express();

require('./server/config/mongoose')


app.use(express.static(__dirname + "/crudApp/dist/crudApp"))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/config/routes')(app)


app.listen(8000, () => {console.log("listening on port 8000")})