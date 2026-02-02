import personService from "../src/services/persons.js";

const Persons = ({ contacts, searchFilter }) => {
  const deletePerson = ({ person }) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deleteResource(person.id).then(() => {
        const updatedPersons = contacts.persons.filter(
          (currentPerson) => currentPerson.id != person.id,
        );
        contacts.setPersons(updatedPersons);
      });
    } else {
      return;
    }
  };
  return (
    <>
      {contacts.persons
        .filter((person) =>
          person.name.toLowerCase().includes(searchFilter.toLowerCase()),
        )
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}{" "}
            <button onClick={() => deletePerson({ person })}>delete</button>
          </p>
        ))}
    </>
  );
};

export default Persons;
