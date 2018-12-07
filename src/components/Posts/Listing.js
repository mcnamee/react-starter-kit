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
import Error from '../Generic/Error';

const PostListing = ({ error, loading, posts }) => {
  // Error
  if (error) return <Error content={error} />;

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
          View Recipe
          {' '}
          <i className="icon-arrow-right" />
        </Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <div>
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
    </div>
  );
};

PostListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

PostListing.defaultProps = {
  error: null,
};

export default PostListing;
