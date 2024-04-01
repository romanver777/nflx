import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "@/mocks/data";
import { getNormalizedData } from "@/utils/getNormalizedData/getNormalizedData";
import type { NormalData } from "@/utils/getNormalizedData/getNormalizedData";

export const loadCatalogData = createAsyncThunk(
  "catalog/loadData",
  async () => data
);

export interface InitialState {
  data: NormalData;
  isLoading: boolean;
  isError: string | null;
}

const initialState: InitialState = {
  data: {},
  isLoading: false,
  isError: null,
};

export const fetchCatalogDataSlice = createSlice({
  name: "load-catalog-data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCatalogData.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(loadCatalogData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = getNormalizedData(action.payload);
      })
      .addCase(loadCatalogData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "Ошибка";
      });
  },
});

export default fetchCatalogDataSlice.reducer;
