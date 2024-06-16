const express = require('express');
const IndexController = require('../controllers/index');

const router = express.Router();
const indexController = new IndexController();

function setRoutes() {
  router.get('/', indexController.getIndex);
  return router;
}

module.exports = setRoutes;