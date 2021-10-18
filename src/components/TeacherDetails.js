import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import PropTypes from 'prop-types';
import { useGetTeacherDetailsQuery } from '../services/teacher';

import style from './teacherDetails.module.scss';

const TeacherDetails = ({ identifier }) => {
  const { data: teacher, error, isLoading } = useGetTeacherDetailsQuery(identifier);

  if (isLoading) {
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
    <div className={style.container}>
      <div
        style={backgroundStyling(teacher.professional_photo)}
        className={style.teacherImage}
      />
      <div className={style.teacherDetails}>
        <h2>{teacher.name}</h2>
        <div>
          <br />
          <br />
          <p>Subject</p>
          <p>{teacher.subject}</p>
          <p>About them</p>
          <p>{teacher.details}</p>
        </div>
        <br />
        <p>
          <b>10 U$</b>
          {' '}
          per hour
        </p>

        <p className={style.explanation}>
          All of our Teachers have an hourly rate of 10U$
          according to the regulations imposed by our platform.
          <br />
          To read more about it, please contact our staff.
        </p>

        <NavLink to={`/bookings/new/${teacher.id}`}>Start Learning ➤</NavLink>
      </div>
      <NavLink to="/" className={style.goBack}>↩</NavLink>
    </div>
  );
};

TeacherDetails.propTypes = {
  identifier: PropTypes.number.isRequired,
};

export default TeacherDetails;
