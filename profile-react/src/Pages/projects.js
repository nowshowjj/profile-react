import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap"
import './Projects.css'
import NavBar from "../components/NavBar/navbar";


export default class Projects extends Component {
  render() {
    return (
    <Container>
        <NavBar />
        <Row>
            <Col lg-12>
            <Projects />
            </Col>
        </Row>
    </Container>
    );
  }
}

