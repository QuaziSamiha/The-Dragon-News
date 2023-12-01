import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import RightNav from "../../components/Shared/RightNav/RightNav";
import Footer from "../../components/Shared/Footer/Footer";

function NewsLayout() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={9}>
            <h1>this is news layout... coming...</h1>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default NewsLayout;
