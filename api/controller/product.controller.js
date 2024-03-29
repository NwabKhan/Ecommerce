import { errorHandler } from "../utils/error.js";
import Product from "../models/product.model.js";

export const createProduct = async (req, res, next) => {
  delete req.body._id; //Temporary here
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
    const remainings = await Product.find({});
    res.status(200).json(remainings);
  } catch (error) {
    next(error);
  }
};

export const editProduct = async (req, res) => {
  const { _id } = req.body;
  const product = await Product.findById(_id);

  if (!product) {
    return next(errorHandler(404, "Product not found!"));
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};
