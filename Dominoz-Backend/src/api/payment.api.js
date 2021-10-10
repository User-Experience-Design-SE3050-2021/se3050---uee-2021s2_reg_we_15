const express = require('express');
const router = express.Router();
const paymentController = require('../controller/payment.controller');

module.exports = function () {
    router.post('/createPayment', paymentController.createPayment);
    router.get('/', paymentController.getAllPayments);

    return router;
}