const express = require('express');
const user = require('../src/routes/user');
const pal = require('../src/routes/pal');

module.exports = function(app) {
    app
        .use(express.json())
        .use('/api/user', user)
        .use('/api/pal', pal)
}