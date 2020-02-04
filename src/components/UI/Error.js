import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';

const Error = ({ title, content }) => (
  <Row className="py-5 my-5">
    <Col md={{ size: 4, offset: 4 }}>
      <h2 className="text-center">{title}</h2>
      <p className="text-center">{content}</p>
      {/* <p className="text-center"><Link to="/" className="btn btn-primary">Go Home</Link></p> */}
    </Col>
  </Row>
);

Error.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Error.defaultProps = {
  title: 'Uh oh',
  content: 'An unexpected error came up',
};

export default Error;
