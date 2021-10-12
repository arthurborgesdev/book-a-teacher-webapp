import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (builder) => ({
    getBookings: builder.query({
      query: () => '/bookings',
    }),
  }),
});

export const {
  useGetBookingsQuery,
} = bookingApi;