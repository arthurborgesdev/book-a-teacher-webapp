import React from 'react';
import PropTypes from 'prop-types';

const SubmitFallback = ({ error, resetErrorBoundary }) => (
  <div>
    <h1>
      An error occurred:
      {error.message}
    </h1>
    <button type="button" onClick={resetErrorBoundary}>Try again</button>
  </div>
);

SubmitFallback.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
  resetErrorBoundary: PropTypes.instanceOf(Function).isRequired,
};

export default SubmitFallback;
