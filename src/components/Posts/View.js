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
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import TemplateSidebar from '../Templates/Sidebar';

const PostViewScreen = ({
  error,
  loading,
  post,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Post not found
  if (!post) return <Error content={ErrorMessages.post404} />;

  return (
    <TemplateSidebar>
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
    </TemplateSidebar>
  );
};

PostViewScreen.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  post: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

PostViewScreen.defaultProps = {
  error: null,
};

export default PostViewScreen;
