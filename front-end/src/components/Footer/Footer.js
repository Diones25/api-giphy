import { Container, Row, Col } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <>
      <div className="mt-2 bg-light fixed-bottom">
        <Container fluid>
          <Row className="justify-content-between">
            <Col xs="auto" className="text-black m-auto py-3">
              {`© ${new Date().getFullYear()}. Todos os direitos reservados.`}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
