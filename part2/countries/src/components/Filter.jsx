const Filter = ({text, searchFilter, setNewFilter}) => {
  const handleSearchChange = (event) => {
    setNewFilter(event.target.value);
    console.log("New filter!")
  };

    return (
    <div>
      {text}<input value={searchFilter} onChange={handleSearchChange} />
    </div>
  )
}

export default Filter;
