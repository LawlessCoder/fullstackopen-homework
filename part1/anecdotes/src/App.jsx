import { useState } from "react";

const SelectButton = ({ selected, setSelected, length }) => {
  const handleClick = () => {
    let newSelected = selected;
    while (newSelected === selected) {
      newSelected = Math.floor(Math.random() * length);
    }
    setSelected(newSelected);
    return;
  };
  return <button onClick={handleClick}>next anecdote</button>;
};

const VoteButton = ({ currentVotes, setVotes, currentAnecdote }) => {
  const handleClick = () => {
    let newVotes = [...currentVotes];
    newVotes[currentAnecdote] += 1;
    console.log("New votes=" + newVotes);
    setVotes(newVotes);
  };
  return <button onClick={handleClick}>vote</button>;
};

const DisplayMaxAnecdotes = ({ votes, anecdotes }) => {
  function indexOfMax(arr) {
    console.log("Running indexOfMax");
    console.log("with input " + arr);
    if (arr.length === 0) {
      return -1;
    }

    var max = arr[0];
    var maxIndices = [0];
    var currentMaxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndices = [i];
        currentMaxIndex = 0;
        max = arr[i];
      } else if (arr[i] === max) {
        currentMaxIndex += 1;
        maxIndices.push(i);
      }
    }
    if (max === 0) {
      maxIndices = [-1];
    }

    console.log("Indices are: " + maxIndices);

    return maxIndices;
  }

  const determineMaxAnecdote = () => {
    const maxIndices = indexOfMax(votes);
    let message = "";
    if (maxIndices[0] === -1) {
      message = "No votes submitted yet!";
    } else if (maxIndices.length > 1) {
      message = "The anecdotes with the maximum length are: ";
      for (let i = 0; i < maxIndices.length; i++) {
        message += '"' + anecdotes[maxIndices[i]] + '", ';
      }
    } else {
      console.log(maxIndices);
      message =
        'The anecdote with the maximum length is "' +
        anecdotes[maxIndices[0]] +
        '"';
    }
    return message;
  };

  return <p>{determineMaxAnecdote()}</p>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  let initialVotes = Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initialVotes);
  const [maxVotes, setMax] = useState([-1]);

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Current votes: {votes[selected]}</p>
      <SelectButton
        selected={selected}
        setSelected={setSelected}
        length={anecdotes.length}
      />
      <VoteButton
        currentVotes={votes}
        setVotes={setVotes}
        currentAnecdote={selected}
      />
      <h1>Anecdote with most votes</h1>
      <DisplayMaxAnecdotes votes={votes} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
