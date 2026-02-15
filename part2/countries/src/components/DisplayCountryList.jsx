const DisplayCountryList = ({ countries, searchFilter, setCountryToShow }) => {
  const handleClick = (event, country) => setCountryToShow(country);

  return (
    <>
      {
        countries
        .filter((country) =>
          country.name.official.toLowerCase().startsWith(searchFilter.toLowerCase())
        )
        .map((country) => (
          <>
            <p key={country.name.official}>
              {country.name.official}
              <button key={country.name.official} onClick={(event) => {handleClick(event, country)}}>Show</button>
            </p>
          </>
        ))
      }
    </>
  )
};

export default DisplayCountryList;
