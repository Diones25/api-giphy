import { useEffect, useState } from "react";
import { 
    Container, 
    Col, 
    Row,  
    Card,
} from "react-bootstrap";
import api from "../../../service/api.js";

import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import NavLinks from '../../NavLinks/NavLinks.js';

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
      <NavLinks />
      
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







