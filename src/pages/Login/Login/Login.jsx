import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section>
        <Container className="w-25 mx-auto">
          <h3>Please Login</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>{" "}
            <br />
            <Form.Text className="text-secondary">
              Don&apos;t have an accout?<Link to="/register">Register</Link>
            </Form.Text>
            <Form.Text className="text-success">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
            <Form.Text className="text-danger">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form>
        </Container>
      </section>
    </>
  );
}

export default Login;
