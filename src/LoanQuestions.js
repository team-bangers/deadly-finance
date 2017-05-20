import React from 'react'
import QuestionForm from './QuestionForm'

class LoanQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 1,
    }
  }

  render() {
    return (
      <div>
        <QuestionForm question={this.props.questions[0]} handleSubmit={this.props.handleSubmit} />
        <QuestionForm question={this.props.questions[1]} handleSubmit={this.props.handleSubmit} />
      </div>
    )
  }
}

export default LoanQuestions;