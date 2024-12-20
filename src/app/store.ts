import { configureStore } from "@reduxjs/toolkit";
import { shopwareApi } from "@/services/shopwareApi";

export default configureStore({
  reducer: {
    [shopwareApi.reducerPath]: shopwareApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopwareApi.middleware),
});
