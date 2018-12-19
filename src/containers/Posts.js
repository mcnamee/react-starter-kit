import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostListingComponent from '../components/Posts/Listing';
import PostViewComponent from '../components/Posts/View';

import { getPosts } from '../actions/posts';

class Posts extends Component {
  static propTypes = {
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

  renderPostListing = ({ posts, error, loading }) => (
    <PostListingComponent
      posts={posts}
      error={error}
      loading={loading}
      reFetch={() => this.fetchPosts()}
    />
  )

  renderPostView = ({ post, error, loading }) => (
    <PostViewComponent
      post={post}
      error={error}
      loading={loading}
      reFetch={() => this.fetchPosts()}
    />
  )

  render = () => {
    const { posts, match } = this.props;
    const { error, loading } = this.state;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    if (id) {
      const post = posts.find(item => parseInt(item.id, 10) === parseInt(id, 10));
      console.log(post);
      return this.renderPostView({ post, error, loading });
    }

    return this.renderPostListing({ posts, error, loading });
  }
}

const mapStateToProps = state => ({ posts: state.posts || {} });
const mapDispatchToProps = { fetchPosts: getPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
