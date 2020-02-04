import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { Link, withRouter } from 'react-router-dom';
import Footer from '../UI/Footer';
import Logo from '../../assets/images/logo.png';

const Template = ({ pageTitle, children }) => (
  <Fragment>
    <div>
      <Container>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <Row>
          <Col sm="12">
            <Link to="/">
              <img
                src={Logo}
                alt="ReactStarterKit"
                className="d-block mx-auto"
                style={{ maxWidth: '260px' }}
              />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col sm="12">{children}</Col>
        </Row>
      </Container>
    </div>

    <Footer />
  </Fragment>
);

Template.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Template.defaultProps = {
  pageTitle: 'ReactStarterKit',
};

export default withRouter(Template);
