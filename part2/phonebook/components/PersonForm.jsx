import personService from "../src/services/persons";

const PersonForm = ({ names, numbers, contacts }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const personInPhonebook = contacts.persons.find(
      (person) => person.name === names.newName,
    );

    if (personInPhonebook) {
      const message = `${names.newName} is already in phonebook, replace the old number with a new one?`;
      if (window.confirm(message)) {
        const updatedPerson = {
          ...personInPhonebook,
          number: numbers.newNumber,
        };
        personService
          .update(personInPhonebook.id, personInPhonebook)
          .then(() => {
            const updatedPersons = contacts.persons.map((currentPerson) => {
              if (currentPerson.id === updatedPerson.id) {
                return updatedPerson;
              } else {
                return currentPerson;
              }
            });
            contacts.setPersons(updatedPersons);
          });
      } else {
        return;
      }
    } else {
      const newPerson = {
        name: names.newName,
        number: numbers.newNumber,
      };

      personService
        .create(newPerson)
        .then((responseData) => console.log(responseData));

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
