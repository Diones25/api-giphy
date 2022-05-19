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
import SearchInput from '../../SearchInput/SearchInput.js';

import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const StickersSearch = () => {
  const [stickersSearchSearch, setStickersSearch] = useState([]);
  const [text, setText] = useState('');
  let [loading, setLoading] = useState(true);

  useEffect(() => {

    if(text) {
      api
        .get(`/stickers/search?q=${text}`)
        .then((response) => {
          console.log(response.data.data);
          setStickersSearch(response.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [text]);

  return (
    <>
      <NavLinks />

      <h1 className="display-4 text-center mt-4" id="davenvale">
        Pesquisa de Stickers
      </h1>

      <SearchInput
        value={text}
        onChange={(search) => setText(search)}
        placeholder="Pesquisar Stickers"
      />

      {loading && (
        <>
          <div
            className="sweet-loading"
            style={{ position: "relative", top: "40px" }}
          >
            <PacmanLoader color="#e74c3c" css={override} size={80} />
          </div>
        </>
      )}

      {stickersSearchSearch && (
        <Container>
          <Row>
            {stickersSearchSearch.map((item, index) => (
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
                    <Card.Title className="bg-white">
                      {item.username}
                    </Card.Title>
                    <Card.Text className="bg-white">{item.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default StickersSearch;
