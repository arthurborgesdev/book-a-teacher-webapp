import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const teacherApi = createApi({
  reducerPath: 'teacherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => '/teachers',
    }),
  }),
});

export const { useGetTeachersQuery } = teacherApi;
