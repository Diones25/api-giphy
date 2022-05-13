import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
    Container, 
    Col, 
    Row,  
    Card,
    Breadcrumb 
} from "react-bootstrap";
import api from "../../../service/api.js";

import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const StickersTrending = () => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    api
      .get("/stickers/trending")
      .then((response) => {
        console.log(response.data.data);
        setStickers(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Breadcrumb
          className="border rounded px-4 py-2 borderColor"
          style={{ backgroundColor: "#ecf0f1" }}
        >
          <Breadcrumb.Item id="BreadcrumbItem">
            <Link to="/" style={{ textDecoration: "none", color:"#000"}}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item id="BreadcrumbItem">
            <Link to="/stickers/trending">Stickers Populares</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item id="BreadcrumbItem">
            <Link to="/gifs/search">Pesquisar Gifs</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item id="BreadcrumbItem">
            <Link to="/stickers/search">Pesquisar Stickers</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      
      <h1 className="display-4 text-center mt-4" id="davenvale">Stickers Populares</h1>

      <Container>
        <Row>
          {stickers.map((item, index) => (
            <Col key={index} className="my-2" lg={3} md={4} sm={6}>
              <Card
                style={{ height: "100%" }}
                className=" shadow-lg p-1 bg-light rounded"
              >
                <Card.Img
                  style={{ height: "100%" }}
                  variant="top"
                  src={item.images.original.url}
                />
                <Card.Body className="bg-white">
                  <Card.Title className="bg-white">{item.username}</Card.Title>
                  <Card.Text className="bg-white">{item.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default StickersTrending;







