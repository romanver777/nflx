import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/components/product-item/product-item";

export type BasketItem = Product & { count: number; total: number };

export type BasketData = {
  [key: number]: BasketItem;
};

export interface InitialState {
  data: BasketData;
  length: number;
  totalPrice: number;
}

const initialState: InitialState = {
  data: {},
  length: 0,
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, { payload }: PayloadAction<Product>) => {
      if (!Object.prototype.hasOwnProperty.call(state.data, payload.id)) {
        state.data[payload.id] = { ...payload, count: 1, total: payload.price };
        state.length += 1;
        state.totalPrice += state.data[payload.id].total;
      }
    },
    increment: (state, { payload }: PayloadAction<number>) => {
      if (Object.prototype.hasOwnProperty.call(state.data, payload)) {
        state.data[payload] = {
          ...state.data[payload],
          count: state.data[payload].count + 1,
          total: state.data[payload].total + state.data[payload].price,
        };
        state.totalPrice += state.data[payload].price;
      }
    },
    decrement: (state, { payload }: PayloadAction<number>) => {
      if (Object.prototype.hasOwnProperty.call(state.data, payload)) {
        state.data[payload] = {
          ...state.data[payload],
          count: state.data[payload].count - 1,
          total: state.data[payload].total - state.data[payload].price,
        };
        state.totalPrice -= state.data[payload].price;
      }
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      if (Object.prototype.hasOwnProperty.call(state.data, payload)) {
        state.length -= 1;
        state.totalPrice -= state.data[payload].total;
        delete state.data[payload];
      }
    },
  },
});

export default basketSlice.reducer;
export const { addToBasket, increment, decrement, remove } =
  basketSlice.actions;
