import { Router } from "express";
import {
  createNewProduct,
  getAllProducts,
  getProductById,
} from "../controllers/product.js";
import upload from "../middleware/multerMiddleware.js";

const router = Router();

router.post("/", upload.single("image"), createNewProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);

export default router;
