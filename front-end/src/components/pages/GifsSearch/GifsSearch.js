import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
    Container, 
    Col, 
    Row,  
    Card,
    Breadcrumb,
    InputGroup,
    FormControl,
    Button
} from "react-bootstrap";
import api from "../../../service/api.js";

import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import '../../../index.css';

const GifsSearch = () => {
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
              <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
                Home
              </Link>
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

        <h1 className="display-4 text-center mt-4" id="davenvale">
          Pesquisa de Gifs
        </h1>

        <Container>
          <Row>
            <Col md={8} className="m-auto">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Pesquisar Gifs"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-primary" id="button-addon2">
                  Pesquisar
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default GifsSearch;