const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    deliveryId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    deliveryPerson: {
        type: String,
        required: true
    },
    deliveryPhone: {
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

const Delivery = mongoose.model('payments', deliverySchema);
module.exports = Delivery;