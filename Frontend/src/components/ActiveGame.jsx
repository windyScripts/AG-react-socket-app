// send score at end of game
// time counter, 

import TimeCounter, { timeRemaining } from "./TimeCounter"
import Question from "./Question"
import { getQuestions } from "../services/quizAPI"
import { setExpiry } from "../../../Backend/controllers/room"


const ActiveGame = () => {
    const [content, setContent] = useState(<p>No questions available.</p>);
    const [answers, setAnswers] = useState({});
    const [response, setResponse] = useState({});
    useEffect(() => {
        setExpiry().then(()=>{getQuestions().then(
            (result) => {
              setContent(result.data.map(e,i => <Question key={i} question={e} onChangeHandler={(event)=>{setResponse((previousResponse=>{
                let target;
                let index = event.target.key;
                let value = event.target.value;
                Object.assign(target,previousResponse)
                target[index]=value;
                return target;
            }))}}/>));
                
              setAnswers((previousAnswers)=>{
                
                let target;
                Object.assign(target,previousAnswers)
                result.forEach(e,i => {
                    target[i]=result[i].correct_answer;
                })
                
              })
            },
            (error) => {
              const _content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
      
              setContent(_content);
            }
          )}
      );
    }, []);

    useEffect(() => {(timeRemaining<=0)&&submitAnswersHandler()
    },[timeRemaining])
    handleRadioChange = (event) => {
        const {key,value} = event.target;
        setResponse(previousResponse => {return [...previousResponse,{key,value}]})
    }
    submitAnswersHandler = () => {
        let score = 0;
        for(key of answers.keys()){
            if(answers[key]===response[key]) score+=1;
        }
        // This has to be figured out.
        // calculate scores
        // send scores, to backend and to other player
        // navigate to result screen
        // update room log
        // remove player from room
    }

    return <>
    <TimeCounter/>
    <form onSubmit={submitAnswersHandler}>
        <h1>Answer the following</h1>
        {content}
        <button type="submit">submit answers</button>
    </form>
    </>
}

export default ActiveGame