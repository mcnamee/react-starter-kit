/* global window */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem } from 'reactstrap';

const Component = ({
  pagination, length, total, loading,
}) => (
  <React.Fragment>
    {(pagination && pagination.length > 0 && !loading) && (
      <div className="d-flex justify-content-between w-100">
        <p className="text-muted font-italic mt-2">{`Showing ${length} of ${total}`}</p>

        <Pagination aria-label="Pagination">
          {pagination.map((page) => (
            <PaginationItem
              key={page.link}
              disabled={(window.location.pathname === page.link)}
            >
              <Link to={page.link} className="page-link">{page.title}</Link>
            </PaginationItem>
          ))}
        </Pagination>
      </div>
    )}
  </React.Fragment>
);

Component.propTypes = {
  pagination: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    link: PropTypes.string.isRequired,
  })),
  length: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loading: PropTypes.bool,
};

Component.defaultProps = {
  pagination: [],
  length: 0,
  total: 0,
  loading: false,
};

export default Component;
