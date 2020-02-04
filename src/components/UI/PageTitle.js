import React from 'react';
import PropTypes from 'prop-types';
import { Container, Jumbotron } from 'reactstrap';

const PageTitle = ({ title }) => (
  <Jumbotron className="bg-dark text-white w-100 pb-2 pt-4 mb-0 rounded-0">
    <Container>
      <h1 className="text-center">{title}</h1>
    </Container>
  </Jumbotron>
);

PageTitle.propTypes = {
  title: PropTypes.string,
};

PageTitle.defaultProps = {
  title: '<!-- Missing Title -->',
};

export default PageTitle;
