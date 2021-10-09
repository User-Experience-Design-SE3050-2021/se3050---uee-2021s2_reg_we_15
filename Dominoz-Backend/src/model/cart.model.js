const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
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
    },
    pizzaSize: {
        type: String,
        trim: true
    },
    pizzaToppings: [{
        type: String,
        trim: true
    }],
    pizzaCount: {
        type: String,
        trim: true
    },
});

const Cart = mongoose.model('cart', CartSchema);
module.exports = Cart;