import personService from "../services/persons";
import { useEffect } from "react";

const PersonForm = ({ names, numbers, contacts, setNotification }) => {
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
          .update(updatedPerson.id, updatedPerson)
          .then(() => {
            const updatedPersons = contacts.persons.map((currentPerson) => {
              if (currentPerson.id === updatedPerson.id) {
                return updatedPerson;
              } else {
                return currentPerson;
              }
            });
            contacts.setPersons(updatedPersons);
            setNotification(
              `Updated ${updatedPerson.name}'s number to ${updatedPerson.number}`,
            );

            setTimeout(() => {
              setNotification(null);
            }, 5000);
          })
          .catch(() => {
            setNotification(
              `Error updating ${updatedPerson.name} in phonebook`,
            );
            setTimeout(() => {
              setNotification(null);
            }, 5000);
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
        .then(() => {
          personService.getAll().then((databasePersons) => {
            contacts.setPersons(databasePersons);
          });
          setNotification(`Added ${newPerson.name} to phonebook.`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        })
        .catch(() => {
          setNotification(`Error adding ${newPerson.name} to phonebook`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        });

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
