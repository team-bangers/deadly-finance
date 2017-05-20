import React from 'react'
import QuestionForm from './QuestionForm'

class LoanQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(answer, questionIndex) {
    this.props.handleSubmit(answer, questionIndex)
    this.setState(prevState => ({
      questionNumber: prevState.questionNumber + 1,
    }))
  }

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        {
          this.props.questions.map((question, index) => {
            return (
              <QuestionForm
                key={question.q}
                question={question}
                questionIndex={index}
                transition={this.state.questionNumber >= index}
                handleSubmit={this.handleSubmit}
              />
            )
          })
        }
      </div>
    )
  }
}

export default LoanQuestions;