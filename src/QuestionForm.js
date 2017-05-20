import React from 'react'
import { FormGroup, FormControl, ControlLabel, ButtonToolbar, Button } from 'react-bootstrap'
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css';

const YesOrNo = ({handleClick}) =>
  <ButtonToolbar>
    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary" value='yes' onClick={handleClick} type='submit'>Yes</Button>

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger" value='no' onClick={handleClick} type='submit'>No</Button>
  </ButtonToolbar>;

const Text = ({value, handleChange}) =>
  <FormControl
    type="text"
    value={value}
    placeholder="Enter text"
    onChange={handleChange}
  />;

class QuestionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

  handleClick(e) {
    this.setState({
      value: e.target.value,
    })
  }

  getValidationState() {
    if (isNaN(parseInt(this.state.value, 10))) {
      return 'error'
    } else {
      return 'success'
    }
  }

  displayInput(type) {
    switch(type) {
      case 'slider':
        return <Slider />
      case 'bool':
        return <YesOrNo handleClick={this.handleClick} />
      case 'text':
      default:
        return <Text value={this.state.value} handleChange={this.handleChange} />
    }
  }

  render () {
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
          <ControlLabel>{this.props.question.q}</ControlLabel>
          {this.displayInput(this.props.question.type)}
          <FormControl.Feedback />
        </FormGroup>
      </form>
    )
  }
}

export default QuestionForm