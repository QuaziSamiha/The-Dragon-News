import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";

function Register() {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    // const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password);
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const createdUser = userCredential.user;
        console.log(createdUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleAccepted = (event) => {
    console.log(event.target.checked);
    setAccepted(event.target.checked);
  };
  return (
    <>
      <section>
        <Container className="w-25 mx-auto">
          <h3>Please Register</h3>
          <Form onSubmit={handleRegister}>
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
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onClick={handleAccepted}
                type="checkbox"
                name="accept"
                // label="Accept Terms and Conditions"
                label={
                  <>
                    Accept <Link to="/terms"> Terms and Conditions</Link>
                  </>
                }
              />
            </Form.Group>
            <Button disabled={!accepted} variant="primary" type="submit">
              Register
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
