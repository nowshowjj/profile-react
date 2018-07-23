import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import HomePage from "../../components/HomePage/HomePage";

const HomePage = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <HomePage />
      </Col>
    </Row>
  </Container>
);

export default AdminHome;