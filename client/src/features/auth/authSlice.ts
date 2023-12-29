import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
