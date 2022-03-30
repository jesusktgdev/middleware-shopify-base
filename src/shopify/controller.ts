import { Request, Response } from "express";
import Shopify from "@shopify/shopify-api";
import dotenv from 'dotenv';

dotenv.config();

const shopify = new Shopify.Clients.Rest(process.env.SHOPIFYSHOPNAME, process.env.SHOPIFYAUTHTOKEN);

const findOrders = async (request: Request, response: Response) => {
    const data = await shopify.get({
        path: 'orders/count',
        query: {
            "status": "closed"
        }
    });
    const { body } = data;
    
    response.json(body);
};

const findUsers = async (request: Request, response: Response) => {
    const data = await shopify.get({
        path: "customers/count",
        query: {
            "tags": "VIP"
        }
    });

    const { body } = data;

    response.json(body);
};

export { findOrders, findUsers };