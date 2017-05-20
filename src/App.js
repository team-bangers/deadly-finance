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
      homeView: true,
      questions,
      answers: [],
    };

    this.displayQuestions = this.displayQuestions.bind(this);
  }

  displayQuestions() {
    this.setState({ homeView: false });
  }

  handleSubmit(answer) {
    const answers = this.state.answers.slice(0).push(answer)
    this.setState({
      answers
    })
  }

  render() {
    if (this.state.homeView) {
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
            <Col md={4}><Button bsStyle="primary" onClick={this.displayQuestions}>Car Loans</Button></Col>
            <Col md={4}><Button bsStyle="primary">Home Loans</Button></Col>
            <Col md={4}><Button bsStyle="primary">Business Loans</Button></Col>
          </Row>
          <Row className="show-grid">
            <Col md={4}><Button bsStyle="primary">Personal Loans</Button></Col>
            <Col md={4}><Button bsStyle="primary">Credit Card</Button></Col>
            <Col md={4}><Button bsStyle="primary">Super Annuation</Button></Col>
          </Row>
          <Row className="show-grid">
            <Col md={4}><Button bsStyle="primary">Term Deposit</Button></Col>
            <Col md={4}><Button bsStyle="primary">Bonds</Button></Col>
            <Col md={4}><Button bsStyle="primary">Stocks</Button></Col>
          </Row>
        </Grid>
        </div>
      )
    } 
      return (
        <div className="App">
          <div className="App-header">
            <img src={header} className="App-logo" alt="logo" />
            <h2>Are you being screwed?</h2>
          </div>
          <p className="App-intro">
            Get some help decoding all the financial mumbo-jumbo!
          </p>
          <LoanQuestions questions={this.state.questions} />;    
        </div>
      ) 
  }
}

export default App;
