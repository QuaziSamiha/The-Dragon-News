import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

function NavigationBar() {
  const { user, setUser, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Link to="/category/0">Home</Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#career">Career</Nav.Link>
              </Nav>
              <Nav>
                {/* <Nav.Link href="#profile">{user.displayName}</Nav.Link> */}
                {/* <Nav.Link href="#profile">
                    <FaUserCircle style={{ fontSize: "2rem" }} />
                  </Nav.Link> */}
                {user && <FaUserCircle style={{ fontSize: "2rem" }} />}
                {/* <Button variant="secondary">Login</Button> */}
                {user ? (
                  <Button onClick={handleLogOut} variant="secondary">
                    Log Out
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default NavigationBar;
