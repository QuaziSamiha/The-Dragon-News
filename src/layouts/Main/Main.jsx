import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../../components/Shared/LeftNav/LeftNav";
import RightNav from "../../components/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/Shared/NavigationBar/NavigationBar";
function Main() {
  return (
    <>
      <Header />
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>
            {/* <h1>Main Content is coming...</h1> */}
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

export default Main;
