import { useState, useEffect } from "react";
import axios from 'axios';
import Filter from "../components/Filter";
import PersonForm from "../components/PersonForm";
import Persons from "../components/Persons";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchFilter, setNewFilter] = useState("");

  useEffect(
   () => {
     axios
       .get('http://localhost:3001/persons')
       .then(response => {
         setPersons(response.data)
       })
   },[])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchFilter={searchFilter} setNewFilter={setNewFilter} />
      <h2>add a new</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchFilter={searchFilter} />
    </div>
  );
};

export default App;
