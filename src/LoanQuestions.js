import React from 'react'
import { FormGroup, ControlLabel } from 'react-bootstrap'
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css';

class LoanQuestions extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   questionNumber: 0,
    // }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(value) {
    this.props.handleSubmit(value)
    // this.setState(prevState => ({
    //   questionNumber: prevState.questionNumber + 1,
    // }))
  }

  render() {
    const question = {q:'What is the interest rate of the loan?', type:'slider'}
    return (
      <div style={{ overflow: 'hidden' }}>
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>{question.q}</ControlLabel>
            <Slider
              min={0}
              max={50}
              onChange={this.handleSubmit}
            />
            {this.props.value}%
            {this.props.value > 10 && this.props.value < 20 && <div>This interest rate is getting a bit high. It might not be the best loan</div>}
            {this.props.value >= 20 && <div>Woah, that interest rate is high. You're getting screwed!</div>}
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default LoanQuestions;