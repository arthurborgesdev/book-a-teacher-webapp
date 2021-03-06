import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dropdownApi = createApi({
  reducerPath: 'dropdownApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://book-a-teacher.herokuapp.com/api/v1/' }),
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => '/cities',
    }),
    getSubjects: builder.query({
      query: () => '/subjects',
    }),
  }),
});

export const {
  useGetCitiesQuery,
  useGetSubjectsQuery,
} = dropdownApi;
