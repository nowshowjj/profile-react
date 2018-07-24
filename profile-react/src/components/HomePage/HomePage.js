import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap"
import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
    <Container>
        <Row>
            <Col lg-12>
                <div id="content">
                <h1>Jose Ayala</h1>
                <h3>A Portfolio</h3>
                <hr/>
                <h3><a class="enter" href = "projects.html">Enter</a></h3>
                </div>
            </Col>
        </Row>
    </Container>
    );
  }
}
