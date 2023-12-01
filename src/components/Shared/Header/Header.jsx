import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

function Header() {
  return (
    <>
      <Container>
        <section>
          <div className="text-center">
            <img src={logo} alt="" />

            <p>
              <small className="text-secondary">
                Journalism Without Fear or Favour
              </small>
            </p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
          </div>
          <div className="d-flex">
            <Button variant="danger">Latest</Button>
            <Marquee className="text-danger" speed={50}>
              I can be a React component, multiple React components, or just
              some text.------------- I can be a React component, multiple React
              components, or just some text.------------- I can be a React
              component, multiple React components, or just some
              text.-------------
            </Marquee>
          </div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#career">Career</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#profile">Profile</Nav.Link>
                  <Nav.Link eventKey={2} href="#login">
                    <Button>Login</Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </section>
      </Container>
    </>
  );
}

export default Header;
