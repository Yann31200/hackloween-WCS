import React from 'react';

function Question({quizz}) {
    return (
        <div>
            <p>{quizz.question}</p>
            <input type="checkbox" value={quizz.value1} onClick={(event) => this.SetState({total: this.state.total + event.target.value})}>{quizz.check1}</input>
            <input type="checkbox" value={quizz.value2} onClick={(event) => this.SetState({total: this.state.total + event.target.value})}>{quizz.check2}</input>
            <input type="checkbox" value={quizz.value3} onClick={(event) => this.SetState({total: this.state.total + event.target.value})}>{quizz.check3}</input>
        </div>
    )
}

export default Question;