const express = require('express');
const UserController = require('../Controller/userController');
const route = express.Router();

route
    .post('/register', UserController.register)
    .post('/login', UserController.login)
    .delete('/delete/:id', UserController.delete)
    .get('/find', UserController.findUser)

module.exports = route;