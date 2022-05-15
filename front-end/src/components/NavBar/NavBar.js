import { Container, Row, Col } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

import img from "../../assets/img/Giphy.jpg";

const NavBar = () => {
  return (
    <>
      <Container className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <Container fluid className="py-5">
            <Row>
              <Col md={6}>
                <h1 className="display-5 fw-bold">Front-End API GIPHY</h1>
                <p>
                  Front-End da API GIPHY criado por mim disponivel nesse{" "}
                  <a href="https://github.com/Diones25/api-giphy">link</a>
                </p>
              </Col>
              <Col md={6}>
                <img src={img} className="img-fluid img-thumbnail" alt="..." />
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default NavBar;
