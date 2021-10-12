import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import teacherReducer from '../features/teacher/teacherSlice';
import { teacherApi } from '../services/teacher';
import { bookingApi } from '../services/booking';

const store = configureStore({
  reducer: {
    [teacherApi.reducerPath]: teacherApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    teacher: teacherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(teacherApi.middleware),
});

export default store;

setupListeners(store.dispatch);
