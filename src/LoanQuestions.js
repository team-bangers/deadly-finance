import React from 'react'

class LoanQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 1,
    }
  }

  render() {
    const questions = this.props.questions
    return (
      <div>
        {questions.map(question => <div>{question}</div>)}
      </div>
    );
  }
}

export default LoanQuestions;