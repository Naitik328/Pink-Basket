import express from "express";
import { listproducts,singleProduct } from "../controllers/product.controller.js";
import adminAuth from "../middlewares/adminAuth.js";

const productRouter = express.Router();

productRouter.get('/single',adminAuth,singleProduct)
productRouter.get('/list',adminAuth,listproducts)

export default productRouter