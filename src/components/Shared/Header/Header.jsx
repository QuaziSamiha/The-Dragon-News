import { Button, Container } from "react-bootstrap";
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
        </section>
      </Container>
    </>
  );
}

export default Header;
