import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Error from '../UI/Error';
import ErrorMessages from '../../constants/errors';
import TemplateSidebar from '../Templates/Sidebar';

const PostListingScreen = ({ posts, error, loading }) => {
  // Error
  if (error) return <Error content={error} />;

  if (!posts) return <Error content={ErrorMessages.missingPosts} />;

  // Build Cards for Listing
  const cards = posts.map(item => (
    <Card key={`${item.id}`}>
      {!!item.image &&
        <Link to={`/post/${item.id}`}>
          <CardImg top src={item.image} alt={item.title} />
        </Link>
      }
      <CardBody>
        <CardTitle>
          {item.title}
        </CardTitle>
        <CardText>
          {item.body}
        </CardText>
        <Link className="btn btn-primary" to={`/post/${item.id}`}>
          View Post
          {' '}
          <i className="icon-arrow-right" />
        </Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <TemplateSidebar>
      <Row>
        <Col sm="12">
          <h1>
            Posts
          </h1>
          <p>
            The following data is read directly from an API.
          </p>
        </Col>
      </Row>
      <Row className={loading ? 'content-loading' : ''}>
        <Col sm="12" className="card-columns">
          {cards}
        </Col>
      </Row>
    </TemplateSidebar>
  );
};

PostListingScreen.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

PostListingScreen.defaultProps = {
  error: null,
  loading: false,
};

export default PostListingScreen;
