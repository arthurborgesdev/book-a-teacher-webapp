import React from 'react';

const DeleteTeacher = () => {
  const {
    data: teachers,
    error,
    isLoading,
    refetch,
  } = useGetTeachersQuery();

  return (
    <div>
      <h1>Delete Teacher Page</h1>
      <div>
      {
        teachers.map((teacher) => (
        <div key={teacher.id}>
          <p>
            Teacher ID:
            {teacher.id}
          </p>
          {' | '}
          <p>
            Teacher Name:
            {teacher.name}
          </p>
          {' | '}
          <button onClick={}></button>
        ))
      }
    </div>
  </div>
};

export default DeleteTeacher;
