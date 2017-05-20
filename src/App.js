import React, { Component } from 'react';
import header from './img/fnf-header.png';
import './App.css';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import LoanQuestions from './LoanQuestions'
import questions from './questions'

class App extends Component {
  constructor () {
    super();
    this.state = {
      questions
    };
  }
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
        <LoanQuestions questions={this.state.questions} />
        <Grid>
          <Row className="show-grid">
            <Col md={4} xs={6}><Button bsStyle="primary">Car Loans</Button></Col>
            <Col md={4} xs={6}><Button bsStyle="primary">Home Loans</Button></Col>
            <Col md={4} xs={6}><Button bsStyle="primary">Payday Loans</Button></Col>
          </Row>
          <Row className="show-grid">
            <Col md={4} xs={6}><Button bsStyle="primary">Personal Loans</Button></Col>
            <Col md={4} xs={6}><Button bsStyle="primary">Cash Advance</Button></Col>
            <Col md={4} xs={6}><Button bsStyle="primary">Super Annuation</Button></Col>
          </Row>
          <Row className="show-grid">
            <Col md={4} xs={6}><Button bsStyle="primary">Term Deposit</Button></Col>
            <Col md={4} xs={6}><Button bsStyle="primary">Bonds</Button></Col>
            <Col md={4} xs={6}><Button bsStyle="primary">Stocks</Button></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
