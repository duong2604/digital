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
  }),
});

export const { useGetProductsQuery } = productApiSlice;
