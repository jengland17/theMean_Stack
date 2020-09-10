const express = require('express')
const app = express();


app.use(express.static(__dirname + '/helloAngular/dist/helloAngular'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req,res) => {

})

app.listen(9000, () => {console.log("listening on port 9000")})