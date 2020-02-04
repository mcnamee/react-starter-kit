import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import Template from '../Templates/Dashboard';
import { errorMessages } from '../../constants/messages';

const ArticlesForm = ({
  error, loading, success, onFormSubmit, defaultValues,
}) => {
  const {
    register, handleSubmit, errors, setValue,
  } = useForm({ defaultValues });

  return (
    <Template pageTitle="Form">
      <Container>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Form onSubmit={handleSubmit(onFormSubmit)}>
                  {!!success && <Alert color="success">{success}</Alert>}
                  {!!error && <Alert color="danger">{error}</Alert>}
                  {!!loading && <Alert color="warning">Loading...</Alert>}

                  <FormGroup className="mt-3">
                    <Label for="email" className="required">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="jane@doe.com"
                      disabled={loading}
                      invalid={!!(errors.email)}
                      innerRef={register({ required: errorMessages.missingEmail })}
                      onChange={(e) => setValue('email', e.target.value)}
                    />
                    {errors.email && <p className="invalid-feedback">{errors.email.message}</p>}
                  </FormGroup>

                  <Button color="primary" disabled={loading} size="lg">
                    {loading ? 'Loading' : 'Submit' }
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </Container>
    </Template>
  );
};

ArticlesForm.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  success: PropTypes.string,
  defaultValues: PropTypes.shape({
    email: PropTypes.string,
  }),
  onFormSubmit: PropTypes.func.isRequired,
};

ArticlesForm.defaultProps = {
  error: null,
  success: null,
  loading: false,
  defaultValues: {},
};

export default withRouter(ArticlesForm);
