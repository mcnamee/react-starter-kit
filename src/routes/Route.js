import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

/**
 * Custom Route Component, to pass URL params simpler
 */
const CustomRoute = ({ ...props }) => (
  <Route render={() => <props.component {...props.computedMatch.params} />} />
);

CustomRoute.propTypes = {
  computedMatch: PropTypes.shape({ params: PropTypes.shape({}) }),
};

CustomRoute.defaultProps = {
  computedMatch: { params: {} },
};

export default CustomRoute;
