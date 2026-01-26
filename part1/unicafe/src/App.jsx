import { useState } from "react";

const VotingStation = ({ states }) => {
  return states.map((item) => (
    <Button
      key={item.text}
      setState={item.setter}
      currentState={item.value}
      buttonText={item.text}
    />
  ));
};

const Button = ({ setState, currentState, buttonText }) => {
  const handleClick = () => {
    const newState = currentState + 1;
    setState(newState);
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({ states }) => {
  return (
    <>
      <h1>statistics</h1>
      {states.map((item) => (
        <StatisticLine key={item.text} text={item.text} value={item.value} />
      ))}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const states = [
    { value: good, setter: setGood, text: "good" },
    { value: neutral, setter: setNeutral, text: "neutral" },
    { value: bad, setter: setBad, text: "bad" },
  ];

  return (
    <div>
      <h1>give feedback</h1>
      <VotingStation states={states} />
      <Statistics states={states} />
    </div>
  );
};

export default App;
