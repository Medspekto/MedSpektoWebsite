import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
  }

const initialState: CounterState = {
    value: 0,
  };

  const loginSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment(state) {
        state.value += 1;
      },
      decrement(state) {
        state.value -= 1;
      },
      incrementByAmount(state, action: PayloadAction<number>) {
        state.value += action.payload;
      },
    },
  });
  export const { increment, decrement, incrementByAmount } = loginSlice.actions;
  export default loginSlice.reducer;
  