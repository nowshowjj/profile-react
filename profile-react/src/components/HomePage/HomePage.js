import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <Container className="overlay">
        <Row>
          <Col lg-12>
            <div className="content">
              <h1 className="title">Jose Ayala</h1>
              <h3 className="portfolio">A Portfolio</h3>
              <hr className="hr" />
              <h3>
                <a className="enter" href="projects.html">
                  Enter
                </a>
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
