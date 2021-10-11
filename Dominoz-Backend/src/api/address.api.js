const express = require('express');
const router = express.Router();
const addressController = require('../controller/address.controller');

module.exports = function () {
    router.post('/createAddress', addressController.createAddress);
    router.get('/', addressController.getAllAddresses);

    return router;
}