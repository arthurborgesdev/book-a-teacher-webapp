import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const teacherApi = createApi({
  reducerPath: 'teacherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => '/teachers',
    }),
    getTeacherDetails: builder.query({
      query: (id) => `/teachers/${id}`,
    }),
    addNewTeacher: builder.mutation({
      query: (initialTeacher) => ({
        url: '/teachers',
        method: 'POST',
        body: initialTeacher,
      }),
    }),
  }),
});

export const {
  useGetTeachersQuery,
  useGetTeacherDetailsQuery,
  useAddNewTeacherMutation,
} = teacherApi;
