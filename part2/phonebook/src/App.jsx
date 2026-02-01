import { useState, useEffect } from "react";
import personService from "./services/persons";

import Filter from "../components/Filter";
import PersonForm from "../components/PersonForm";
import Persons from "../components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchFilter, setNewFilter] = useState("");

  const names = { newName, setNewName };
  const numbers = { newNumber, setNewNumber };
  const contacts = { persons, setPersons };

  // Populate initial contacts from database
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchFilter={searchFilter} setNewFilter={setNewFilter} />
      <h2>add a new</h2>
      <PersonForm names={names} numbers={numbers} contacts={contacts} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchFilter={searchFilter} />
    </div>
  );
};

export default App;
