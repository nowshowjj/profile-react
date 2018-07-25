import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Home from "../components/HomePage/HomePage";
import './Home.css';


// Need to fix the css and take the navbar out. Just put it in to make sure I could actually get it to show up on the page. 

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
