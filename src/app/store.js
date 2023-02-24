import { configureStore } from "@reduxjs/toolkit";
import authReducers from "features/auth/authSlice";
// import homeReducers from "features/auth/homepageslice";
import { apiSlice } from "../features/Api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducers,
    // home: homeReducers,
  },
  middleware: (getDefultMiddlewares) =>
    getDefultMiddlewares().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
