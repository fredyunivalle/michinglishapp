import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const modalsdeductionSlice = createSlice({
  name: "modalsdeduction",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = modalsdeductionSlice.actions;

export default modalsdeductionSlice.reducer;