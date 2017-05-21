import React, { Component } from 'react';
import header from './img/fnf-header.png';
import './App.css';
import { Grid, Row, Col, Button } from 'react-bootstrap';
// import ReactPlayer from 'react-player'
import LoanQuestions from './LoanQuestions';
import questions from './questions';
import Results from './results';

class App extends Component {
  constructor () {
    super();
    this.state = {
      homeView: true,
      homeContainerStyle: {
        opacity: 1
      },
      loanQuestionsContainer: {
        opacity: 0
      },
      questions,
    };

    this.displayQuestions = this.displayQuestions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  displayQuestions() {
    this.setState(prevState => ({
      // homeView: !prevState.homeView,
      homeContainerStyle: {
        opacity: 0,
        transform: 'translateX(-1000px)'
      },
      loanQuestionsContainer: {
        opacity: 1,
        transform: 'translateY(-1350px)',
      }
    }));
  }

  handleSubmit(answer, questionIndex) {
    const question = Object.assign({}, this.state.questions[questionIndex], {a: answer})
    const newQuestionsArray = this.state.questions.slice(0)
    newQuestionsArray[questionIndex] = question
    this.setState({
      questions: newQuestionsArray
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
          <div className="homeContainer" style={this.state.homeContainerStyle}>
            <p className="App-intro">
              Get some help decoding all the financial mumbo-jumbo!
            </p>
            {/*<ReactPlayer url='https://www.youtube.com/watch?v=L16ZUH-sCGc' />*/}
            <img src="https://media.giphy.com/media/YaoEnNsrYoBKE/giphy.gif" alt="housewives-of-narromine" width="480" height="264" />
            <Grid>
              <Row className="show-grid">
                <Col md={4}><Button bsStyle="primary" onClick={this.displayQuestions}>Car Loans</Button></Col>
                <Col md={4}><Button bsStyle="primary">Home Loans</Button></Col>
                <Col md={4}><Button bsStyle="primary">Business Loans</Button></Col>
              </Row>
              <Row className="show-grid">
                <Col md={4}><Button bsStyle="primary">Personal Loans</Button></Col>
                <Col md={4}><Button bsStyle="primary">Credit Card</Button></Col>
                <Col md={4}><Button bsStyle="primary">Superannuation</Button></Col>
              </Row>
              <Row className="show-grid">
                <Col md={4}><Button bsStyle="primary">Term Deposit</Button></Col>
                <Col md={4}><Button bsStyle="primary">Bonds</Button></Col>
                <Col md={4}><Button bsStyle="primary">Stocks</Button></Col>
              </Row>
            </Grid>
            <Results stars={2} />
          </div>
          <div className='loanQuestionsContainer' style={this.state.loanQuestionsContainer}>
            <LoanQuestions questions={this.state.questions} handleSubmit={this.handleSubmit} />;
          </div>
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
              
        </div>
      ) 
  }
}

export default App;
