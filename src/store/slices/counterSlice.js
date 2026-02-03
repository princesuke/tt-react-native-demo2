import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0, // ตัวแปร state เริ่มต้น
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // สั่งบวก 1
    },
    decrement: (state) => {
      state.value -= 1; // สั่งลบ 1
    },
    reset: (state) => {
      state.value = 0;  // สั่งรีเซ็ต
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
