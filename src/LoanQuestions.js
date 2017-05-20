import React from 'react'

const LoanQuestions = ({ questions }) => {
  return (
    <div>
      {questions.map(question => <div>{question}</div>)}
    </div>
  );
}

export default LoanQuestions;