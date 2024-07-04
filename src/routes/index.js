import express from 'express';
import  IndexController from '../controllers/index.js';

const router = express.Router();
const indexController = new IndexController();

export const setRoutes = () => {
  router.get('/', indexController.getIndex);
  return router;
}

