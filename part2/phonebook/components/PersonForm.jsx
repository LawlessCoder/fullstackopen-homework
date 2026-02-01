import axios from "axios";

const PersonForm = ({ names, numbers, contacts }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const personInPhonebook = contacts.persons.find(
      (person) => person.name === names.newName,
    );

    if (personInPhonebook) {
      alert(`${names.newName} is already in phonebook`);
    } else {
      const newPerson = {
        name: names.newName,
        number: numbers.newNumber,
      };

      axios
        .post("http://localhost:3001/persons", newPerson)
        .then((response) => {
          console.log(response);
        });

      contacts.setPersons(contacts.persons.concat(newPerson));
      names.setNewName("");
      numbers.setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    names.setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    numbers.setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={names.newName} onChange={handleNameChange} />
      </div>
      <div>
        number:{" "}
        <input value={numbers.newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
