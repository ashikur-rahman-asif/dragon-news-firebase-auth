import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext)
  const navigate=useNavigate()
    const handleLoginIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    
        signIn(email, password)
          .then(result => {
            const loggedUser = result.user;
            form.reset()
            navigate(('/category/0'), {replace: true});
          })
          .catch(error => {
            console.log(error);
          })
      }
  return (
    <div>
      <h3 className="text-center mt-3">Please login</h3>
      <Container className="w-25 mx-auto">
        <Form onSubmit={handleLoginIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
                  </Button>
                  <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

</Form.Text>
<Form.Text className="text-danger">

</Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
