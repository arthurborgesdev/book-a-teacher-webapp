import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  tagTypes: ['booking'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://book-a-teacher.herokuapp.com/api/v1/' }),
  endpoints: (builder) => ({
    getBookings: builder.query({
      query: () => '/bookings',
      providesTags: ['booking'],
    }),
    addNewBooking: builder.mutation({
      query: (initialBooking) => ({
        url: '/bookings',
        method: 'POST',
        body: initialBooking,
      }),
      invalidatesTags: ['booking'],
    }),
    removeBooking: builder.mutation({
      query: (bookingId) => ({
        url: `/bookings/${bookingId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['booking'],
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useAddNewBookingMutation,
  useRemoveBookingMutation,
} = bookingApi;
