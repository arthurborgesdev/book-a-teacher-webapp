import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useGetTeachersQuery, useRemoveTeacherMutation } from '../services/teacher';

import style from './listItem.module.scss';

const DeleteTeacher = () => {
  const {
    data = [],
    error,
    isLoading: getTeachersIsLoading,
  } = useGetTeachersQuery();

  const [
    removeTeacher,
  ] = useRemoveTeacherMutation();

  if (getTeachersIsLoading) {
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

  const backgroundStyling = (url) => (
    {
      background: `url('${url}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  );

  return (
    <div className={style.pageBackground}>
      <div className={style.container}>
        <h1>Delete Teacher Page</h1>
        {
          data.map((teacher) => (
            <div key={teacher.id}>
              <div
                style={backgroundStyling(teacher.professional_photo)}
                className={style.teacherImage}
              />
              <p><b>{teacher.name}</b></p>
              <p>{teacher.subject}</p>
              <button type="button" onClick={() => removeTeacher(teacher.id)}>
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DeleteTeacher;
