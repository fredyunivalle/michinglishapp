import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: {},
  loading: false,
  error: null,
};

export const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.categories = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = vocabularySlice.actions;

export default vocabularySlice.reducer;
