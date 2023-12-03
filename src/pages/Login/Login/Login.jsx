import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

function Login() {
  const { setUser, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const loggedInUser = userCredential.user;
        console.log(loggedInUser);
        setUser(loggedInUser.email);
        navigate("/category/0");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      <section>
        <Container className="w-25 mx-auto">
          <h3>Please Login</h3>
          <Form onSubmit={handleSignIn}>
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
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
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
