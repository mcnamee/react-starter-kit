import React from 'react';
import {
  Row, Col, Jumbotron, Container,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faPalette, faMoneyBillWave, faCertificate, faPlus, faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import Template from './Templates/Dashboard';

const About = () => (
  <Template pageTitle="Hello World" noPadding>
    <React.Fragment>
      <Container>
        <Row className="mb-2 mt-md-5">
          <Jumbotron className="bg-primary text-white rounded-0">
            <h2>Lorem Ipsum is simply dummy text.</h2>
            <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries.
            </p>
          </Jumbotron>
        </Row>
        <Row>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faTachometerAlt} />
              {' '}
              Lorem Ipsum
            </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p><Link to="/articles" className="btn btn-primary">Learn More</Link></p>
          </Col>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faPalette} />
              {' '}
              Lorem Ipsum
            </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p><Link to="/articles" className="btn btn-primary">Learn More</Link></p>
          </Col>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faMoneyBillWave} />
              {' '}
              Lorem Ipsum
            </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p><Link to="/articles" className="btn btn-primary">Learn More</Link></p>
          </Col>
        </Row>
        <Row>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faCertificate} />
              {' '}
              Lorem Ipsum
            </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p><Link to="/articles" className="btn btn-primary">Learn More</Link></p>
          </Col>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faPlus} />
              {' '}
              Lorem Ipsum
            </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p><Link to="/articles" className="btn btn-primary">Learn More</Link></p>
          </Col>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faUserCircle} />
              {' '}
              Lorem Ipsum
            </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p><Link to="/articles" className="btn btn-primary">Learn More</Link></p>
          </Col>
        </Row>
      </Container>

      <hr className="mt-5" />

      <Container>
        <Row className="py-5">
          <Col xs={{ size: 6, offset: 3 }} lg={{ size: 2, offset: 2 }} className="text-center">
            <img className="img-fluid rounded-circle d-inline-block" src="https://avatars0.githubusercontent.com/u/1809236?s=460&v=4" alt="Matt Mcnamee" />
          </Col>
          <Col lg="5" className="mt-4 text-center text-lg-left">
            <h3>I can help</h3>
            <p>
              This repo is a great place to start, but if you'd prefer to sit back and have your new
              project built for you,
              {' '}
              <a target="_blank" rel="noopener noreferrer" href="https://mcnam.ee">
                get in touch with me directly
              </a>
              {' '}
              and I'll provide a quote.
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  </Template>
);

export default withRouter(About);
