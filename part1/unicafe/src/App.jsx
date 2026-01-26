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
  const totalCount = states.reduce((total, item) => item.value + total, 0);

  let average = null;
  let percentPositive = null;
  const good = states.find((item) => item.text === "good");
  if (totalCount === 0) {
    average = 0;
    percentPositive = 0;
  } else {
    average =
      states.reduce((total, item) => item.value * item.weight + total, 0) /
      totalCount;
    percentPositive = (good.value * 100) / totalCount + " %";
  }

  return (
    <>
      <h1>statistics</h1>
      {states.map((item) => (
        <StatisticLine key={item.text} text={item.text} value={item.value} />
      ))}
      <StatisticLine text={"all"} value={totalCount} />
      <StatisticLine text={"average"} value={average} />
      <StatisticLine text={"positive"} value={percentPositive} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const states = [
    { value: good, setter: setGood, text: "good", weight: 1 },
    { value: neutral, setter: setNeutral, text: "neutral", weight: 0 },
    { value: bad, setter: setBad, text: "bad", weight: -1 },
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
