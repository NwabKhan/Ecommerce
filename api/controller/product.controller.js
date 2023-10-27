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

export const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
};

export const getSingleProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const sinleProduct = await Product.findOne({ ID: id });
    res.status(200).json(sinleProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { ID } = req.body;
    await Product.findOneAndDelete({ ID });
    res.status(200).json("Successfully Deleted!");
  } catch (error) {
    next(error);
  }
};
