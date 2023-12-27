import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
    },

    loggedOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, loggedOut } = authSlice.actions;

export default authSlice.reducer;
