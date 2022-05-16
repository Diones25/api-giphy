import { useEffect, useState } from "react";
import { 
    Container, 
    Col, 
    Row,  
    Card,
} from "react-bootstrap";
import api from "../../../service/api.js";

import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import '../../../index.css';

import NavLinks from '../../NavLinks/NavLinks.js';
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const GifsTrending = () => {
  const [gifs, setGifs] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/gifs/trending")
      .then((response) => {
        console.log(response.data.data);
        setGifs(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavLinks />

      <h1 className="display-4 text-center mt-4" id="davenvale">
        Gifs Populares
      </h1>

      {loading && (
        <>
          <div className="sweet-loading" style={{ position: "relative", top: "40px" }}>
            <PacmanLoader color="#e74c3c" css={override} size={80} />
          </div>
        </>
      )}

      <Container className="mb-5 pb-5">
        <Row>
          {gifs.map((item, index) => (
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

export default GifsTrending;
