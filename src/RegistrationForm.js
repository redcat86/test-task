import React, { useState } from "react";
import { Form, Button, Col, Jumbotron, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RegistrationForm(props) {
  const [state, setState] = useState({
    validated: false,
    loading: false,
    data: {
      firstName: "",
      password: "",
      pwdConfirm: "",
      username: "",
      email: "",
    },
  });
  const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const { password, pwdConfirm } = state.data;
    event.preventDefault();
    const notPassed = form.checkValidity() === false || password !== pwdConfirm;
    if (notPassed) {
      event.stopPropagation();
    } else {
      if (props.onSubmit) props.onSubmit(state.data);
    }
    setState({
      ...state,
      validated: true,
      loading: !notPassed,
    });
  };

  return (
    <Jumbotron>
      <h2 className="center-text">User Registration Form</h2>
      <Form noValidate validated={state.validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Row>
            <Form.Label column lg={2}>
              First Name
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter your First Name"
                disabled={state.loading}
                onChange={(val) => {
                  setState({
                    ...state,
                    data: { ...state.data, firstName: val.target.value },
                  });
                }}
              />
              <Form.Text className="text-muted">
                We'll share THIS with everyone.
              </Form.Text>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formUserName">
          <Form.Row>
            <Form.Label column lg={2}>
              Username
            </Form.Label>
            <Col>
              <Form.Control
                required
                type="text"
                disabled={state.loading}
                placeholder="Enter Username"
                onChange={(val) => {
                  setState({
                    ...state,
                    data: { ...state.data, username: val.target.value },
                  });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide valid Username
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Row>
            <Form.Label column lg={2}>
              Password
            </Form.Label>
            <Col>
              <Form.Control
                required
                type="password"
                disabled={state.loading}
                placeholder="Enter Password"
                onChange={(val) => {
                  setState({
                    ...state,
                    data: { ...state.data, password: val.target.value },
                  });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide password
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formPasswordConfirm">
          <Form.Row>
            <Form.Label column lg={2}>
              Password Confirmation
            </Form.Label>
            <Col>
              <Form.Control
                required
                disabled={state.loading}
                type="password"
                placeholder="Confirm Password"
                onChange={(val) => {
                  setState({
                    ...state,
                    data: { ...state.data, pwdConfirm: val.target.value },
                  });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please confirm your password
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Row>
            <Form.Label column lg={2}>
              Email address
            </Form.Label>
            <Col>
              <Form.Control
                required
                disabled={state.loading}
                type="email"
                placeholder="Enter email"
                onChange={(val) => {
                  setState({
                    ...state,
                    data: { ...state.data, email: val.target.value },
                  });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={state.loading}>
          {state.loading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : null}
          {state.loading ? "Loading..." : "Submit"}
        </Button>
      </Form>
    </Jumbotron>
  );
}
