const express = require('express');
const router = express.Router();
const cartController = require('../controller/cart.controller');

module.exports = function () {
    router.get('/', cartController.getAllCart);
    router.post('/createOrder', cartController.createCart);
    router.delete('/delete/:id', cartController.deleteItem);
    router.get('/getTotal', cartController.calculateTotal);

    return router;
}