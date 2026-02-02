const Filter = ({searchFilter, setNewFilter}) => {
  const handleSearchChange = (event) => {
    setNewFilter(event.target.value);
  };

    return (
    <div>
      filter shown with <input value={searchFilter} onChange={handleSearchChange} />
    </div>
  )
}

export default Filter;
