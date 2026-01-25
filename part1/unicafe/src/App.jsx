import { useState } from 'react'

const Button = ({setState, currentState, buttonText}) => {
  const handleClick = () => {
    const newState = currentState + 1;
    setState(newState);
  }

  return (
    <button onClick={handleClick}>{buttonText}</button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button setState={setGood} currentState={good} buttonText="good" />
      <Button setState={setNeutral} currentState={neutral} buttonText="neutral" />
      <Button setState={setBad} currentState={bad} buttonText="bad" />
    </div>
  )
}

export default App
