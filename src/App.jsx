import { useState, useEffect } from 'react'
import './App.css'
import LevelPage from './Components/LevelPage'
import GamePage from './Components/GamePage'

function App() {
  const [gameStart, setGameStart] = useState({
    'level' : "",
    'startState' : false,
  })


  function levelSelect (id)
  {
    setGameStart(prevState => {
      return {
        ...prevState,
        level : id,
        startState : true
      }
    })
  }

  return (
    <div className={`App bg-[url('/src/assets/blobs.png'),url('/src/assets/blobs-1.png')] bg-no-repeat bg-[position:bottom_left,_top_right] transition-all duration-300 ` + (gameStart.startState ? "bg-[length:100px_100px] md:bg-[length:100px_100px]" : "bg-[length:200px_200px]")}>
      { gameStart.startState ? 
      <GamePage 
      level = {gameStart.level}
      />
      : <LevelPage 
      id = {['easy','medium','hard']}
      levelSelect = {levelSelect}
      /> }
    </div>
  )
}

export default App
