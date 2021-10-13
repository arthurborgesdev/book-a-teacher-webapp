import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import PropTypes from 'prop-types';
import { useGetTeacherDetailsQuery } from '../services/teacher';

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

  return (
    <>
      <h2>
        Name:
        {teacher.name}
      </h2>
      <img src={teacher.professional_photo} alt="People visual understanding of the teacher's appearance" width="400" />
      <p>
        ID:
        {teacher.id}
      </p>
      <p>
        Details:
        {teacher.details}
      </p>
      <p>
        Subject:
        {teacher.subject}
      </p>
      <NavLink to={`/bookings/new/${teacher.id}`}>Book this Teacher</NavLink>
    </>
  );
};

TeacherDetails.propTypes = {
  identifier: PropTypes.number.isRequired,
};

export default TeacherDetails;
