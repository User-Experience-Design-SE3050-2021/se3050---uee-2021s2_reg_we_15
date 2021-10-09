const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    pizzaImage: {
        type: String,
        required: true,
        trim: true
    },
    pizzaName: {
        type: String,
        required: true,
        trim: true
    },
    pizzaPrice: {
        type: String,
        required: true,
        trim: true
    },
    pizzaDescription: {
        type: String,
        required: true,
        trim: true
    }
});

const Pizza = mongoose.model('pizza', PizzaSchema);
module.exports = Pizza;