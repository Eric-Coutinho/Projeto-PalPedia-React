const express = require('express');
const UserController = require('../Controller/userController');
const route = express.Router();

route
    .post('/', UserController.register)

module.exports = route;