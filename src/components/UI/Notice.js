import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert } from 'reactstrap';

const Notice = ({
  title, content, error, success, loading, padding,
}) => (
  <Row className={padding ? 'py-5 my-5' : ''}>
    <Col md={{ size: 8, offset: 2 }}>
      {title && <h2 className="text-center">{title}</h2>}
      {!!success && <Alert color="success">{success}</Alert>}
      {!!error && <Alert color="danger">{error}</Alert>}
      {!!loading && <Alert color="warning">Loading...</Alert>}
      <p>{content}</p>
    </Col>
  </Row>
);

Notice.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.string,
  loading: PropTypes.bool,
  padding: PropTypes.bool,
};

Notice.defaultProps = {
  title: '',
  content: '',
  error: null,
  success: null,
  loading: false,
  padding: true,
};

export default Notice;
