import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Form,
  Label,
  Alert,
  Input,
  Button,
  CardBody,
  FormGroup,
  CardHeader,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import Loading from '../Generic/Loading';

class SignUp extends React.Component {
  static propTypes = {
    success: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    success: null,
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = async (event) => {
    event.preventDefault();
    const { onFormSubmit, history } = this.props;

    try {
      await onFormSubmit(this.state);
      setTimeout(() => history.push('/'), 1000); // Redirect after 1s
    } catch (error) { /* */ }
  }

  render() {
    const { loading, error, success } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
      password2,
    } = this.state;

    // Loading
    if (loading) return <Loading />;

    return (
      <div>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>
                Sign Up
              </CardHeader>
              <CardBody>
                {!!success && (
                <Alert color="success">
                  {success}
                </Alert>
                )}
                {!!error && (
                  <Alert color="danger">
                    {error}
                  </Alert>
                )}
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="firstName">
                      First Name
                    </Label>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="John"
                      value={firstName}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lastName">
                      Last Name
                    </Label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Doe"
                      value={lastName}
                      onChange={this.handleChange}
                    />
                  </FormGroup>

                  <FormGroup style={{ marginTop: 40 }}>
                    <Label for="email">
                      Email
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@doe.corp"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">
                      Password
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password2">
                      Confirm Password
                    </Label>
                    <Input
                      type="password"
                      name="password2"
                      id="password2"
                      placeholder="••••••••"
                      value={password2}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button color="primary">
                    Sign Up!
                  </Button>
                </Form>

                <hr />

                <Row>
                  <Col sm="12">
                    Already have an account?
                    <Link to="/login">
                      &nbsp;Login
                    </Link>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(SignUp);
