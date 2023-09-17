const Question = (question,key,onChangeHandler) => {
    const time = Date.now();
    const option1 = time%2? question.correct_answer:question.incorrect_answer;
    const option2 = time%2? question.incorrect_answer:question.correct_answer;
 return (
 <>
 <p>{question.question}</p>
 <input type="radio" id={key+(time%2?'correct':'incorrect' )} name={question.question} value={option1} onChange={onChangeHandler}/>
  <label for={key+(time%2?'correct':'incorrect')}>{option1}</label>
  <input type="radio" id={key+(time%2?'incorrect':'correct')} name={question.question} value={option2} onChange={onChangeHandler}/>
  <label for={key+(time%2?'incorrect':'correct')}>{option2}</label>
 </>
 )
}

export default Question;