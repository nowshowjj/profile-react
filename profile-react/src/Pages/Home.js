import React from "react";
import { Col, Row, Container } from "./../components/Grid";
import Home from "./../components/HomePage/HomePage";

const HomePage = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Home />
      </Col>
    </Row>
  </Container>
);

export default HomePage;
