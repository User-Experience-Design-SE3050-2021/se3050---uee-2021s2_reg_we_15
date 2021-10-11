const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    expireMonth: {
        type: String,
        required: true
    },
    expireYear: {
        type: String,
        required: true
    },
    cvc: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
});

const Payment = mongoose.model('payments', paymentSchema);
module.exports = Payment;