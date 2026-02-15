const Filter = ({ text, searchFilter, setNewFilter, setCountryToShow }) => {
  const handleSearchChange = (event) => {
    setCountryToShow(null);
    setNewFilter(event.target.value);
  };

    return (
    <div>
      {text}<input value={searchFilter} onChange={handleSearchChange} />
    </div>
  )
}

export default Filter;
