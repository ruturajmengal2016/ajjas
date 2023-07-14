import { configureStore } from "@reduxjs/toolkit";
import { commentsSlice } from "./slice";

export const store = configureStore({
  reducer: {
    comments: commentsSlice.reducer,
  },
});
