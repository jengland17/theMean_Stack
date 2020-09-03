const express = require('express')
const ejs = require('ejs')
const app = express()

    app.use(express.static(__dirname+'/static'))
    app.set('view engine', 'ejs')
    app.set('views', __dirname + '/views')

    app.get('/', (req,res)=>{
        res.send('Hello Class')
    })
    app.get('/home', (req,rep)=>{

        

        res.render('index')
    })

app.listen(8080, ()=>{console.log('listening on port 8080')})