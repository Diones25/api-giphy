import React, { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import useDebounce from '../../service/useDebounce.js';

const SearchInput = ({ value, onChange, placeholder }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <>
      <Container className="mb-5 pb-5">
        <Row>
          <Col md={6} className="m-auto">
            <Form>
              <Form.Group className="mt-3">
                <Form.Control
                  type="search"
                  value={displayValue}
                  onChange={handleChange}    
                  placeholder={placeholder}              
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchInput;
