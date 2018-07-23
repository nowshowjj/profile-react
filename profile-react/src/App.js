import React, { Component } from 'react';
import { Col, Row, Container } from "./components/Grid";
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
<Container fluid>
  <Row>
		<Col size = "md-12">
			<h1>Jose Ayala</h1>
			<h3>A Portfolio</h3>
			<h3><Link to="/projects/">Enter</Link></h3>
    </Col>  
  </Row>
</Container>
    );
  }
}

export default App;
