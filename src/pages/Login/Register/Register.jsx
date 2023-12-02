import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <section>
        <Container className="w-25 mx-auto">
          <h3>Please Login</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                name="accept"
                label="Accept Terms and Conditions"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>{" "}
            <br />
            <Form.Text className="text-secondary">
              Already have an accout?<Link to="/login">Login</Link>
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

export default Register;
