import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct } from "../controller/product.controller.js";

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/get-all-products", getAllProducts);
router.post("/delete-product", deleteProduct);
router.get("/get-single-product/:id", getSingleProduct);

export default router;
