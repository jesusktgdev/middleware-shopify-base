"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUsers = exports.findOrders = void 0;
const shopify_api_1 = __importDefault(require("@shopify/shopify-api"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const shopify = new shopify_api_1.default.Clients.Rest(process.env.SHOPIFYSHOPNAME, process.env.SHOPIFYAUTHTOKEN);
const findOrders = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield shopify.get({
        path: 'orders/count',
        query: {
            "status": "closed"
        }
    });
    const { body } = data;
    response.json(body);
});
exports.findOrders = findOrders;
const findUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield shopify.get({
        path: "customers/count",
        query: {
            "tags": "VIP"
        }
    });
    const { body } = data;
    response.json(body);
});
exports.findUsers = findUsers;
