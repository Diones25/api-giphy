import { useEffect, useState } from "react";
import { 
    Container, 
    Col, 
    Row,  
    Card,
    InputGroup,
    FormControl,
    Button 
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
  const [gifsSearch, setGifsSearch] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/gifs/search")
      .then((response) => {
        console.log(response.data.data);
        setGifsSearch(response.data.data);
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
        Pesquisa de Gifs
      </h1>

      <Container className="mb-5 pb-5">
        <Row>
          <Col md={8} className="m-auto">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Pesquisar Gifs"
                aria-label="Pesquisar Gifs"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-primary" id="button-addon2">
                Pesquisar
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      {loading && (
        <>
          <div className="sweet-loading" style={{ position: "relative", top: "40px" }}>
            <PacmanLoader color="#e74c3c" css={override} size={80} />
          </div>
        </>
      )}
      
      <Container>
        <Row>
          {gifsSearch.map((item, index) => (
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
