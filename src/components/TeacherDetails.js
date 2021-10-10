import React from 'react';
import PropTypes from 'prop-types';

const TeacherDetails = ({ name }) => (
  <h1>{name}</h1>
);

TeacherDetails.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TeacherDetails;
