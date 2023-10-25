import express from "express";
import { createProduct, getAllProducts } from "../controller/product.controller.js";

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/get-all-products", getAllProducts);

export default router;
