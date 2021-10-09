const express = require('express');
const router = express.Router();
const menuController = require('../controller/menu.controller');

module.exports = function () {
    router.get('/', menuController.getAllPizza);
    router.post('/createMenu', menuController.createMenu);

    return router;
}