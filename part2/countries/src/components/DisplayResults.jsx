import DisplayCountryInfo from "./DisplayCountryInfo"

const DisplayResults = ({ data, searchFilter }) => {
  let displayData = []

  if (searchFilter != "") {
    console.log("Non-empty filter!")
    displayData = data.filter((country) => country.name.official.toLowerCase().startsWith(searchFilter.toLowerCase()))

    const numberOfCountries = displayData.length
    console.log(`numberOfCountries=${numberOfCountries}`)

    if (numberOfCountries === 1) {
      console.log("Only one country")
      console.log(displayData)
      return (
        <DisplayCountryInfo country={displayData[0]} />
      )
    } else if (numberOfCountries > 0 && numberOfCountries <= 10) {
      console.log("Multiple countries")
      return (
        <>
          {
            data
            .filter((country) =>
              country.name.official.toLowerCase().startsWith(searchFilter.toLowerCase())
            )
            .map((country) => (
              <p key={country.name.official}>
                {country.name.official}
              </p>
            ))
          }
        </>
      )
    } else if (numberOfCountries > 10) {
      return <p>Too many matches, specify another filter</p>
    } else {
      return <p>No matches!</p> 
    }
  }

};

export default DisplayResults;
