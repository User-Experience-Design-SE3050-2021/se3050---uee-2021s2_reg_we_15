const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    expireDate: {
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
    amount: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
    // userId: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'users' }]
});

const Payment = mongoose.model('payments', paymentSchema);
module.exports = Payment;