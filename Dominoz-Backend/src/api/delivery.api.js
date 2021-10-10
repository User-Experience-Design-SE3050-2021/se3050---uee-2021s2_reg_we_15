const express = require('express');
const router = express.Router();
const deliveryController = require('../controller/delivery.controller');

module.exports = function () {
    router.post('/createDelivery', deliveryController.createDelivery);
    router.get('/', deliveryController.getAllDeliveries);

    return router;
}