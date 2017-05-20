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
        <QuestionForm questions={this.props.questions} questionIndex={0} handleSubmit={this.props.handleSubmit} />
        <QuestionForm questions={this.props.questions} questionIndex={1} handleSubmit={this.props.handleSubmit} />
      </div>
    )
  }
}

export default LoanQuestions;