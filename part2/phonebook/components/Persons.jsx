const Persons = ({persons, searchFilter}) => {
  return (
    <>
      {persons
        .filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map(person => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  )
}
 
export default Persons;
