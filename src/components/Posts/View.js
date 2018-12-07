import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardHeader,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ErrorMessages from '../../constants/errors';
import Loading from '../Generic/Loading';
import Error from '../Generic/Error';

const PostView = ({
  error,
  loading,
  posts,
  postId,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get this Post from all posts
  let post = null;
  if (postId && posts) {
    post = posts.find(item => parseInt(item.id, 10) === parseInt(postId, 10));
  }

  // Post not found
  if (!post) return <Error content={ErrorMessages.post404} />;

  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>
            {post.title}
          </h1>
          <p>
            by
            {' '}
            {post.author}
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg="4" className="post-view-card">
          <Card>
            <CardHeader>
              About this post
            </CardHeader>
            <CardBody>
              <CardText>
                {post.body}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col sm="12">
          <Link className="btn btn-secondary" to="/posts">
            <i className="icon-arrow-left" />
            {' '}
            Back
          </Link>
        </Col>
      </Row>
    </div>
  );
};

PostView.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

PostView.defaultProps = {
  error: null,
};

export default PostView;
