import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state, action) => {
      state.filter((teacher) => teacher !== action.payload);
    },
  },
});

export const { add, remove } = teacherSlice.actions;

export default teacherSlice.reducer;