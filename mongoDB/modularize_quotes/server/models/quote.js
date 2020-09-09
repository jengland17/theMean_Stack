const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({

    name: {type: String, required: true, minlength: [3, "Name needs to be at least 3 characters"]},
    quote: {type: String, required: true, minlength: [10, "Quote needs at least 10 characters"]}

}, {timestamps: true});

const Quote = mongoose.model('Quote', QuoteSchema);



module.exports = {

    Quote:Quote,
    QuoteSchema:QuoteSchema

}