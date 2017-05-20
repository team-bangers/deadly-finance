import React, { Component } from 'react';
import header from './img/fnf-header.png';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={header} className="App-logo" alt="logo" />
          <h2>Are you being screwed?</h2>
        </div>
        <p className="App-intro">
          Get some help decoding all the financial mumbo-jumbo!
        </p>
        <Grid>
          <Row className="show-grid">
            <Col md={4} xs={6}>Car Loans</Col>
            <Col md={4} xs={6}>Home Loans</Col>
            <Col md={4} xs={6}>Credit Cards</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
