import { apiSlice } from "../../app/api/apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (credentials) => ({
        url: "/users/forgot-password",
        method: "POST",
        body: credentials,
      }),
    }),

    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/users/reset-password",
        method: "PATCH",
        body: credentials,
      }),
    }),
  }),
});

export const { useForgotPasswordMutation, useResetPasswordMutation } =
  userApiSlice;
