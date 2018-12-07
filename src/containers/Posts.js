import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPosts } from '../actions/posts';

class Posts extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchPosts: PropTypes.func.isRequired,
  }

  static defaultProps = { match: null }

  state = {
    loading: false,
    error: null,
  }

  componentDidMount = () => this.fetchPosts();

  fetchPosts = async () => {
    const { fetchPosts } = this.props;
    try {
      await fetchPosts();
      this.setState({ error: null, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render = () => {
    const { Layout, posts, match } = this.props;
    const { error, loading } = this.state;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        postId={id}
        posts={posts}
        error={error}
        loading={loading}
        reFetch={() => this.fetchPosts()}
      />
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts || {} });
const mapDispatchToProps = { fetchPosts: getPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
