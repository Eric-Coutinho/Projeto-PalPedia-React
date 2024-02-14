const express = require('express');
const PalController = require('../Controller/palController');
const route = express.Router();

route
    .get('/alpha/:id', PalController.getPal)
    .get('/specie/:id', PalController.getSpecie)
    .get('/specie', PalController.getSpecies)
    .get('/:id', PalController.getPal)
    .get('/', PalController.getPals)

module.exports = route;