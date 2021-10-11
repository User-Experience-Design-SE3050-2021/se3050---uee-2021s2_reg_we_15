const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    Address: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

const Delivery = mongoose.model('payments', deliverySchema);
module.exports = Delivery;