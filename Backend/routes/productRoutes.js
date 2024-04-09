import express from "express";
import { getProducts, getProductsInStock, createClient } from "../controllers/productController.js";

const router = express.Router();

//Obtiene todos los productos
router.get("/allproducts", getProducts);
//Obtiene todos los productos inStock
router.get("/products", getProductsInStock);

router.post("/clients", createClient);


export default router;

