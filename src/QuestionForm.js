import React from 'react'
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap'

class QuestionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state.value, this.props.questionIndex)
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

  render () {
    const { question, index } = this.props
    const style = {
      transform: this.props.transition ? 'translateY(0px)' : 'translateY(500px)',
      transition: 'transform 1s',
    }
    return (
      <form onSubmit={this.handleSubmit} style={style}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>{question.q}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    )
  }
}

export default QuestionForm