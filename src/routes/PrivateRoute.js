import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { hasAuthToken } from '../lib/jwt';

const PrivateRoute = ({ ...rest }) => {
  const { member } = rest;

  // Not logged in - redirect to /login
  if (!hasAuthToken() || !member) {
    return <Redirect to="/login" />;
  }

  // Logged in and verified
  return <Route {...rest} />;
};

PrivateRoute.propTypes = {
  member: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  member: state.member || {},
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
