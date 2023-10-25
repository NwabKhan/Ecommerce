import { errorHandler } from "../utils/error.js";
import Product from "../models/product.model.js";

export const createProduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};
