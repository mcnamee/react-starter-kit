/* global window */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  NavItem,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faPalette, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const MobileTabBar = () => (
  <div className="mobile-tab-bar d-md-none">
    <Nav fill pills>
      <NavItem>
        <Link className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`} to="/">
          <FontAwesomeIcon icon={faTachometerAlt} />
          <span>Home</span>
        </Link>
      </NavItem>
      <NavItem>
        <Link
          className={`nav-link ${window.location.pathname.startsWith('/article') ? 'active' : ''}`}
          to="/articles/"
        >
          <FontAwesomeIcon icon={faPalette} />
          <span>Articles</span>
        </Link>
      </NavItem>
      <NavItem>
        <Link
          className={`nav-link ${window.location.pathname.startsWith('/example-form') ? 'active' : ''}`}
          to="/example-form/"
        >
          <FontAwesomeIcon icon={faMoneyBillWave} />
          <span>Form</span>
        </Link>
      </NavItem>
    </Nav>
  </div>
);

MobileTabBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(MobileTabBar);
