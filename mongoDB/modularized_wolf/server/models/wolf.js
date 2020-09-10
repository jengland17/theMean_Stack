const mongoose = require('mongoose')

const WolfSchema = new mongoose.Schema({

    name: {type: String, required: true, minlength: [3, "Name needs at least 3 characters"]},
    location: {type: String, required: true, minlength: [3, "Location needs at least 3 characters"]},
    fact: {type: String, required: true, minlength: [10, "fact needs at least 10 characters"]}

}, {timestamps: true})

const Wolf = mongoose.model('Wolf', WolfSchema);


module.exports = {
    Wolf:Wolf,
    WolfSchema: WolfSchema
}