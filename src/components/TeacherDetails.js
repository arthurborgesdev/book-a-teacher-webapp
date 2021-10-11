import React from 'react';

import PropTypes from 'prop-types';
import { useGetTeacherDetailsQuery } from '../services/teacher';

const TeacherDetails = ({ identifier }) => {
  const { data, error, isLoading } = useGetTeacherDetailsQuery(identifier);

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
        {data.name}
      </h2>
      <img src={data.professional_photo} alt="People visual understanding of the teacher's appearance" width="400" />
      <p>
        ID:
        {data.id}
      </p>
      <p>
        Details:
        {data.details}
      </p>
      <p>
        Subject id:
        {data.subject_name}
      </p>
    </>
  );
};

TeacherDetails.propTypes = {
  identifier: PropTypes.number.isRequired,
};

export default TeacherDetails;
