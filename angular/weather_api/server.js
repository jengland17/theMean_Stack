const express = require('express')
const app = express();

// require('./server/config/mongoose')


app.use(express.static(__dirname + "/weatherApp/dist/weatherApp"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('./server/config/routes')(app)

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./weatherApp/dist/weatherApp/index.html"))
});


app.listen(4200, () => { console.log("listening on port 4200") })