import express from 'express';
import { findOrders, findUsers } from './controller'; 


const shopifyRouter = express.Router();

shopifyRouter.get('/orders', findOrders);
shopifyRouter.get('/users', findUsers);

export default shopifyRouter;