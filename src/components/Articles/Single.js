import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link, Redirect } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Alert,
  CardImg,
} from 'reactstrap';
import Template from '../Templates/Dashboard';

const Single = ({
  error, loading, article,
}) => {
  if (!loading && !article) return <Redirect to="/404" />;

  return (
    <Template pageTitle={article.name || 'Article'}>
      <React.Fragment>
        <Container>
          <Row>
            <Col md="12">
              {!!error && <Alert color="danger">{error}</Alert>}
              {!!loading && <Alert color="warning">Loading...</Alert>}
            </Col>

            {article.id && (
              <Col md={{ size: 6, offset: 3 }}>
                <Card>
                  {article.image && (
                    <CardImg top width="100%" src={article.image} alt={article.name} />
                  )}
                  <CardBody>
                    Posted
                    {' '}
                    {article.date ? article.date : 'n/a'}
                    <hr />
                    {/* eslint-disable-next-line */}
                    {article.contentRaw && <div dangerouslySetInnerHTML={{ __html: article.contentRaw }} />}
                  </CardBody>
                </Card>
              </Col>
            )}
          </Row>

          <Row>
            <Col className="text-center my-5 mb-md-0">
              <Link to="/articles/" className="btn btn-secondary">Back</Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    </Template>
  );
};

Single.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  article: PropTypes.shape({
    placeholder: PropTypes.bool,
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string,
    contentRaw: PropTypes.string,
    excerpt: PropTypes.string,
    image: PropTypes.string,
  }),
};

Single.defaultProps = {
  error: null,
  loading: false,
  article: {},
};

export default withRouter(Single);
