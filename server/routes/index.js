import { Router } from "express";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";
import productRouter from "./product.router.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/products", productRouter);

export default router;
