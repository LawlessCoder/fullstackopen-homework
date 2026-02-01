const PersonForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const personInPhonebook = props.persons.find((person) => person.name === props.newName);

    if (personInPhonebook) {
      alert(`${props.newName} is already in phonebook`);
    } else {
      const newPerson = {
        name: props.newName,
        number: props.newNumber,
      };
      props.setPersons(props.persons.concat(newPerson));
      props.setNewName("");
      props.setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    props.setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    props.setNewNumber(event.target.value);
  };

  return (
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={props.newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm;
