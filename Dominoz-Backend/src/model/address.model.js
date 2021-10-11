const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
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
});

const Address = mongoose.model('addresses', AddressSchema);
module.exports = Address;