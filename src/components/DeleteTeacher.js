import React from 'react';
import { useGetTeachersQuery, useRemoveTeacherMutation } from '../services/teacher';

const DeleteTeacher = () => {
  const {
    data = [],
    error,
    isLoading: getTeachersIsLoading,
  } = useGetTeachersQuery();

  const [
    removeTeacher,
    { isLoading: removeTeacherIsLoading },
  ] = useRemoveTeacherMutation();

  if (getTeachersIsLoading && removeTeacherIsLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Oops, this error occured:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1>Delete Teacher Page</h1>
      <div>
        {
          data.map((teacher) => (
            <div key={teacher.id}>
              <span>
                Teacher ID:
                {teacher.id}
              </span>
              {' | '}
              <span>
                Teacher Name:
                {teacher.name}
              </span>
              {' | '}
              <button type="button" onClick={() => removeTeacher(teacher.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DeleteTeacher;
