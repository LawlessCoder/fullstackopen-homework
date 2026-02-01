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

  return (
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm;
