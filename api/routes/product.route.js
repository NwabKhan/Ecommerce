import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, editProduct } from "../controller/product.controller.js";

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/get-all-products", getAllProducts);
router.delete("/delete-product", deleteProduct);
router.put("/edit-product", editProduct);
router.get("/get-single-product/:id", getSingleProduct);

export default router;
