import { Link } from "react-router-dom";
import { Container, Breadcrumb } from "react-bootstrap";

const NavLinks = () => {
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
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item id="BreadcrumbItem">
            <Link id="Link" to="/stickers/trending">
              Stickers Populares
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item id="BreadcrumbItem">
            <Link to="/gifs/search">Pesquisar Gifs</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item id="BreadcrumbItem">
            <Link to="/stickers/search">Pesquisar Stickers</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </>
  );
};

export default NavLinks;
