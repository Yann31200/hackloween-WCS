import React from 'react'
import $ from 'jquery'
import Question from './question'


class Quiz extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        quiz: {},
        index: 0,
        answers: []
      }
  }

  // Récupération des données d'api (Simulation via un fichier .json)
  componentDidMount() {
    $.getJSON('https://raw.githubusercontent.com/Yann31200/hackloween-WCS/Yann/src/components/quiz/api/quizQuestions.json', function(result) {
      this.setState({quiz: result})
    }.bind(this))
  }

  handleSubmit() {
    if (this.state.index < this.state.quiz.questions.length) {
      this.setState({'index': this.state.index + 1})
    } else {
      let score = this.state.score || 0
      this.state.answers.map((answer, i) => (
        score = score + this.state.quiz.questions[i].answers[answer].point
      ))
      this.setState({'score': score})
    }
  }

  handleAnswerSelected(event) {
    let list = [...this.state.answers.slice(0, this.state.index),
                parseInt(event.target.value),
                ...this.state.answers.slice(this.state.index + 1)]
    this.setState({'answers': list})
  }

  render() {
    const {
      quiz, index, answers
    } = this.state

    let completed = (quiz.questions && (index === quiz.questions.length)) ? true : false
    let numberOfQuestions = quiz.questions ? quiz.questions.length : 0
    let score = 0
    if (completed) {
      this.state.answers.map((answer, i) => (
        score = score + this.state.quiz.questions[i].answers[answer].point
      ))
    }

    // Affichage du score.
    return (
      <div>
        <h1>{quiz.title}</h1>
        {completed ?
          <div>
            <p>Félicitation, Tu as finis le quiz</p>
            Ton score est de : {score}
          </div>
        :
          <div>
          <h2>Question {index + 1} sur {numberOfQuestions}</h2>
          {quiz.questions && index < numberOfQuestions ?
            <Question
              question={quiz.questions[index]}
              index={index}
              onAnswerSelected={(event) => this.handleAnswerSelected(event)}
              onSubmit={() => this.handleSubmit()}
            />
          : ''}
          </div>
        }
      </div>
    )
  }
}

export default Quiz;