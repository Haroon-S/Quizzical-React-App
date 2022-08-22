import {useState, useEffect} from 'react'
import Questions from "./Questions"

export default function LevelPage (props)
{


    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)
    const [score, setScore] = useState(0)
    const [gameEnd, setGameEnd] = useState(false)
    const [playing, setPlaying] = useState(true)

   function handleAnswer(id, event) {
    // console.log(event.target)
    const {name, value} = event.target
    setQuestions(prevAnswer => {
      return prevAnswer.map(answer => {
        return answer.id === id ? {...answer, [name]: value} : answer
    })
    })
   }

    // !loading && console.log(questions[0].correct_answer)
    // !loading && console.log(questions[1].correct_answer)
    // !loading && console.log(questions[2].correct_answer)
    // !loading && console.log(questions[3].correct_answer)
    // !loading && console.log(questions[4].correct_answer)
    useEffect(() => {
        
        async function questions() {
          let res 
          res = await fetch(`https://opentdb.com/api.php?amount=5&category=18&difficulty=${props.level}&type=multiple`) //Compter Science
          // res = await fetch(`https://opentdb.com/api.php?amount=5&category=11&difficulty=${props.level}&type=multiple`) //Films
          // res = await fetch(`https://opentdb.com/api.php?amount=5&category=27&difficulty=${props.level}&type=multiple`) //Animals
          const data = await res.json()
          // console.log(data.results)
          let quiz = data.results.map((quizQuestions, index) => {
            const arrAnswers = [...quizQuestions.incorrect_answers]
            arrAnswers.push(quizQuestions.correct_answer)
            arrAnswers.sort(() => 0.5 - Math.random());
            // console.log(quizQuestions)
            return {
              'id' : index,
              'question' : quizQuestions.question,
              'correct_answer' : quizQuestions.correct_answer,
              'arrAnswers' : arrAnswers,
              'incorrect_answers' : quizQuestions.incorrect_answers,
              'answer' : ""
            }
          })
          // console.log(quiz)
          setQuestions(quiz)

          setLoading(false)
        }
        questions()
      },[playing])

      function checkAnswer() {
        console.log("Submit Clicked")
        for (let x = 0; x < questions.length; x++)
        {
          if(questions[x].answer === questions[x].correct_answer)
          {
            setScore(prevScore => prevScore + 1)
          }
        }
        setGameEnd(true)
      }

      function handlePlaying ()
      {
        setPlaying(prevState => !prevState)
        setGameEnd(false)
        setLoading(true)
        setScore(0)
      }

    //   const questionElement = 
    const questionElement = questions.map((ques, index) => {
      // console.log(ques)
      return (
        <Questions 
          key = {index}
          id = {index}
          question = {ques.question}
          incorrectAnswers = {ques.incorrect_answers}
          correctAnswer = {ques.correct_answer}
          arrAnswers = {ques.arrAnswers}
          handleAnswer = {handleAnswer}
          answer = {ques.answer}
          gameState = {gameEnd}
        />
      )
    })
      
    return (
        <div className=' h-full w-full p-10'>
          {loading ? 
          <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
          <div className="flex items-center space-x-2 w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[400px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[440px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[360px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <span className="sr-only">Loading...</span>
      </div>
      : <div className=" transition-all">
        {questionElement}
        {!gameEnd ?
          <button onClick={checkAnswer} className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  shadow-blue-500/50  dark:shadow-blue-800/80 font-medium md:font-bold md:text-xl r text-lg px-5 py-2 rounded-3xl mt-5 shadow-xl  " >Submit</button>
         : <div>
          <h2 className="mt-4 text-3xl text-[#293264] p-1 font-bold">{score === 0 ? "WoW my friend you are really dumb 🤩. Your Score is : " : "Score : "}{score} / 5</h2>
          <button onClick={handlePlaying} className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  shadow-blue-500/50  dark:shadow-blue-800/80 font-medium md:font-bold md:text-xl r text-lg px-5 py-2 rounded-3xl mt-5 shadow-xl  ">Play Again</button>
         </div>
         }
      </div>
        }
        
        </div>
    )
}