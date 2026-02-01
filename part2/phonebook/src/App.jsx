import { useState } from "react";
import Filter from "../components/Filter"
import PersonForm from "../components/PersonForm"
import Persons from "../components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchFilter, setNewFilter] = useState("");

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
