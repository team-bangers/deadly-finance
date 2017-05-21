import React, { Component } from 'react';
import header from './img/fnf-header.png';
import './App.css';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import LoanQuestions from './LoanQuestions';
import questions from './questions';
import Results from './Results';
import carLoan from './img/car-loans.png';

class App extends Component {
  constructor () {
    super();
    this.state = {
      homeView: true,
      resultsView: false,
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
        <Grid className="App" fluid={true}>
          
          <Row className="Header">
            <Col md={12}>
              <img src={header} className="App-logo" alt="logo" />
            </Col>
          </Row>
          
          <Row className='IntroText'>
            <Col md={12}>
              <h2>Are you being screwed?</h2>
              <p className="App-intro">
                Get some help decoding all the financial mumbo-jumbo!
              </p>
            </Col>
          </Row>

          <Row className='IntroVid'>
            <Col md={12}>
              <ReactPlayer className='video' url='https://www.youtube.com/embed/7daI_Btr97A' />
              <img src="https://media.giphy.com/media/YaoEnNsrYoBKE/giphy.gif" alt="housewives-of-narromine" width="480" height="264" />
            </Col>
          </Row>
          
          <Row className="Buttons" style={this.state.homeContainerStyle}>
            <Col md={12}>
                <Grid>
                  <Row className="show-grid">
                    <Col md={4}><img src={carLoan} className="product-btn" alt="car-loans" /></Col>
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
            </Col>
          </Row>
          
          <Row className='Stars'>
            <Col md={12}>
              <Results stars={1} />
            </Col>
          </Row>
          
          <Row className='Footer'>
            <Col md={12}>
              <LoanQuestions questions={this.state.questions} handleSubmit={this.handleSubmit} />
            </Col>
          </Row>
        </Grid>
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
