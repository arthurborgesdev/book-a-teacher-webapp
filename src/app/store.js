import { configureStore } from '@reduxjs/toolkit';
import teacherReducer from '../features/teacher/teacherSlice';

export const store = configureStore({
  reducer: {
    teacher: teacherReducer,
  },
});