import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../components/Auth/Login';
import * as MemberActions from '../actions/member';

class Login extends Component {
  static propTypes = {
    member: PropTypes.shape({}).isRequired,
    login: PropTypes.func.isRequired,
  }

  state = {
    loading: false,
    error: null,
    success: null,
  }

  onFormSubmit = async (data) => {
    const { login } = this.props;
    try {
      const success = await login(data);
      this.setState({ error: null, loading: false, success });
    } catch (error) {
      this.setState({ error: error.message, loading: false, success: null });
      throw new Error();
    }
  }

  render = () => {
    const { member } = this.props;
    const { error, loading, success } = this.state;

    return (
      <Layout
        error={error}
        member={member}
        loading={loading}
        success={success}
        onFormSubmit={this.onFormSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = {
  login: MemberActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
