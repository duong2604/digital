import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6),
});

export type User = z.infer<typeof userSchema>;

export const productSchema = z.object({
  name: z.string(),
  image: z.string(),
  brand: z.string(),
  category: z.string(),
  description: z.string(),
  price: z.number(),
  countInStock: z.string(),
  numReviews: z.number(),
});

export type Product = z.infer<typeof productSchema>;
