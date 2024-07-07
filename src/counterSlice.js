import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  result: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      state.result += action.payload;
    },
    subtract: (state, action) => {
      state.result -= action.payload;
    },
    clear: (state) => {
      state.result = initialState.result;
    },
  },
});

export const { add, subtract, clear } = counterSlice.actions;
export default counterSlice.reducer;
