import { apiSlice } from "../../app/api/apiSlice";
import { Product } from "../../types/data.types";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/products`,
      transformResponse: (response: { products: Product[] }) =>
        response?.products,
      keepUnusedDataFor: 5,
      providesTags: ["Product"],
    }),
    getProductDetail: builder.query<Product, string>({
      query: (productId) => `/products/${productId}`,
      transformResponse: (response: { product: Product }) => response.product,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery } =
  productApiSlice;
