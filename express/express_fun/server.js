const express = require('express')
const app = express()

    app.use(express.static(__dirname+'/static'))
    app.set('static', __dirname + '/static')



app.listen(8080, ()=>{console.log('listening on port 8080')})