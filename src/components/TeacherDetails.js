import React from 'react';

import PropTypes from 'prop-types';
import { useGetTeacherDetailsQuery } from '../services/teacher';

const TeacherDetails = ({ identifier }) => {
  const { data, error, isLoading } = useGetTeacherDetailsQuery(identifier);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops, an error occured</div>;
  }

  return (
    <>
      <h2>
        Name:
        {data.name}
      </h2>
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
        {data.subject_id}
      </p>
      <p>
        created_at:
        {data.created_at}
      </p>
      <p>
        updated_at:
        {data.updated_at}
      </p>
    </>
  );
};

TeacherDetails.propTypes = {
  identifier: PropTypes.number.isRequired,
};

export default TeacherDetails;
