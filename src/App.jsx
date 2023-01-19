import { useEffect, useState } from 'react'
import './App.css'
import Selection from './components/selection'
import Result from './components/result'
import rules from './images/image-rules.svg'
import close from './images/icon-close.svg'


function App() {
  const [selection, setSelection] = useState("nochoice")
  const [compSelection, setCompSelection] = useState("")
  const [score, setScore] = useState([0, 0, 'DRAW'])
  const [rulepic, setRulepic] = useState(false)

  const handleRules = () => {

    setRulepic(prevsetting => !prevsetting)

  }

  const handleResult = (e) => {

    setSelection(e.currentTarget.name)

    const random = Math.floor(Math.random() * 3);

    if (random == 0) { setCompSelection("rock") } else if (random == 1) { setCompSelection("paper") } else { setCompSelection("scissors") }

  }

  useEffect(() => {

    const newArray = [...score]

    switch (true) {


      case (selection == compSelection):

        newArray[2] = "DRAW"
        setScore(newArray)
        break

      case (selection == "rock" && compSelection == "paper"):
        newArray[1] = newArray[1] + 1
        newArray[2] = "LOSE"
        setScore(newArray)
        break

      case (selection == "scissors" && compSelection == "rock"):
        newArray[1] = newArray[1] + 1
        newArray[2] = "LOSE"
        setScore(newArray)
        break

      case (selection == "paper" && compSelection == "scissors"):
        newArray[1] = newArray[1] + 1
        newArray[2] = "LOSE"
        setScore(newArray)
        break


      case (selection == "scissors" && compSelection == "paper"):
        newArray[0] = newArray[0] + 1
        newArray[2] = "WIN"
        setScore(newArray)
        break

      case (selection == "rock" && compSelection == "scissors"):
        newArray[0] = newArray[0] + 1
        newArray[2] = "WIN"
        setScore(newArray)
        break

      case (selection == "paper" && compSelection == "rock"):
        newArray[0] = newArray[0] + 1
        newArray[2] = "WIN"
        setScore(newArray)
        break

    }


  }, [selection])

  return (
    <>

      <main style={{ opacity: rulepic && "60%" }} className='wrapper'>

        <div className='uppertable'>
          <div><h1>ROCK<br /> PAPER <br />SCISSORS</h1></div>
          <div className='scoretable'>
            <div className='score'>YOUR SCORE <p>{score[0]}</p></div>
            <div className='score'>COMP'S SCORE <p>{score[1]}</p></div>
          </div>
        </div>

        {selection == "nochoice" && <Selection handleResult={handleResult} />}


        

        
      </main>
      {selection !== "nochoice" && <Result handleResult={handleResult} selected={selection} compselected={compSelection} score={score} />}
      <div onClick={handleRules} className='rules'>RULES</div>
      {rulepic && <div className='rulepic'><img alt="rules" src={rules}></img><img alt="close" onClick={handleRules} src={close}></img></div>}

    </>
  )
}

export default App
