import { configureStore } from "@reduxjs/toolkit";
import catalog from "./catalog/catalog";
import basket from "./basket/basket";

export const store = configureStore({
  reducer: {
    catalog,
    basket,
  },
  devTools: true,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
