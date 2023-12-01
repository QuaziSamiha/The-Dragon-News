import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../../components/Shared/LeftNav/LeftNav";
import RightNav from "../../components/Shared/RightNav/RightNav";
function Main() {
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>Main Content is coming...</Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Main;
