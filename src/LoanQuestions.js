import React from 'react'
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap'

class LoanQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 1,
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state.value)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  getValidationState() {
    if (isNaN(parseInt(this.state.value))) {
      return 'error'
    } else {
      return 'success'
    }
  }

  render() {
    const questions = this.props.questions
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>{questions[this.state.questionNumber]}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default LoanQuestions;