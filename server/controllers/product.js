import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";
import createHttpError from "http-errors";
import { validateInputNewProduct } from "../utils/validation.js";
import { formatImage } from "../middleware/multerMiddleware.js";
import { v2 as cloudinary } from "cloudinary";

export const getAllProducts = asyncHandler(async (req, res) => {
  const { brand, price } = req.query;
  // filter
  const queryObject = {};

  if (brand) {
    queryObject.brand = { $in: brand.split(",") };
  }

  if (price) {
    queryObject.price = { $gte: price };
  }

  const products = await Product.find(queryObject);
  return res.json({ products });
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new createHttpError.NotFound(
      `Not found product with id ${req.params.id}`
    );
  }
  return res.json({ product });
});

export const createNewProduct = asyncHandler(async (req, res) => {
  const { error } = validateInputNewProduct(req.body);
  if (error) {
    throw new createHttpError.BadRequest(error.details[0].message);
  }
  if (!req.file) {
    throw new createHttpError.BadRequest("Please choose an image.");
  }

  const file = formatImage(req.file);
  const result = await cloudinary.uploader.upload(file, {
    folder: "digital_shop",
  });
  const newProduct = await Product.create({
    ...req.body,
    image: result.secure_url,
    imagePublicId: result.public_id,
  });

  return res.status(201).json({ newProduct });
});
