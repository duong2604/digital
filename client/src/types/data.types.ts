import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6),
});

export type User = z.infer<typeof userSchema>;

export const productSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  image: z.string(),
  brand: z.string().optional(),
  category: z.string().optional(),
  description: z.string().optional(),
  price: z.number(),
  countInStock: z.string(),
  numReviews: z.number(),
});

export type Product = z.infer<typeof productSchema>;

export const cartItemSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  image: z.string(),
});

export type CartItem = z.infer<typeof cartItemSchema>;
