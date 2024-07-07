import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  result: 0,
  saved: [],
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
    save: (state) => {
      state.saved = [...state.saved, state.result];
      state.result = 0;
    },
  },
});

export const { add, subtract, clear, save } = counterSlice.actions;
export default counterSlice.reducer;
