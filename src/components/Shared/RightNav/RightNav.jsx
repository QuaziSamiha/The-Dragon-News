import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";
function RightNav() {
  return (
    <section>
      <div>
        <h4>Login With</h4>
        <Button variant="outline-primary">
          {" "}
          <FaGoogle /> Login with Google{" "}
        </Button>{" "}
        <Button variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook />
            facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div>
        <img src={bg} alt="" />
      </div>
    </section>
  );
}

export default RightNav;
