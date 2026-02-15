import { useState, useEffect } from 'react'
import countryService from "./services/countries"

import Filter from "./components/Filter"
import DisplayCountries from "./components/DisplayCountries"

function App() {
  const [ countries, setCountries ] = useState([])
  const [ searchFilter, setNewFilter ] = useState("")
  const [ countryToShow, setCountryToShow ] = useState([])


  useEffect(() => {
    countryService
      .getAll()
      .then((response) => {
        setCountries(response);
      })
      .catch((error) => {
      })
  }, [])

  return (
    <>
      <Filter text="Find country:" searchFilter={searchFilter} setNewFilter={setNewFilter} setCountryToShow={setCountryToShow} />
      <DisplayCountries data={countries} searchFilter={searchFilter} countryToShow={countryToShow} setCountryToShow={setCountryToShow} />
      <p></p>
    </>
  )
}

export default App
