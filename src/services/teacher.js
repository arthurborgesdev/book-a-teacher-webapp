import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const teacherApi = createApi({
  reducerPath: 'teacherApi',
  tagTypes: ['teacher'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => '/teachers',
      providesTags: ['teacher'],
    }),
    getTeacherDetails: builder.query({
      query: (id) => `/teachers/${id}`,
      providesTags: ['teacher'],
    }),
    addNewTeacher: builder.mutation({
      query: (initialTeacher) => ({
        url: '/teachers',
        method: 'POST',
        body: initialTeacher,
      }),
      invalidatesTags: ['teacher'],
    }),
    removeTeacher: builder.mutation({
      query: (teacherId) => ({
        url: `/teachers/${teacherId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['teacher'],
    }),
  }),
});

export const {
  useGetTeachersQuery,
  useGetTeacherDetailsQuery,
  useAddNewTeacherMutation,
  useRemoveTeacherMutation,
} = teacherApi;
