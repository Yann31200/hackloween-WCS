import React from 'react'

const Question = ({
  question,
  index,
  onAnswerSelected,
  onSubmit
}) => {

  // Affichage des questions.
  return (
    <div>
      <h3>{question.question}</h3>
      <ol type="a">
      {question.answers.map((answer, i) =>
        <li key={`${index}-${i}`}>
          <input type="radio" name={`question_${index}`} id={`question_${index}_answer_${i}`} defaultChecked={false} value={i} onChange={onAnswerSelected} />
          {' '}
          <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
        </li>
      )}
      </ol>
      <button onClick={onSubmit}>Envoi</button>
    </div>
  )
}

export default Question;