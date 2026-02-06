import { useState, useEffect } from 'react'
import countryService from "./services/countries"

import Filter from "./components/Filter"
import SelectData from "./components/SelectData"
import DisplayResults from "./components/DisplayResults"

function App() {
  const [ countries, setCountries ] = useState([])
  const [ displayData, setDisplayData ] = useState([])
  const [ searchFilter, setNewFilter ] = useState("")

  useEffect(() => {
    countryService
      .getAll()
      .then((response) => {
        console.log("Found countries!")
        setCountries(response);
      })
      .catch((error) => {
        console.log("Error obtaining countries!")
      })
  }, [])

  return (
    <>
      <Filter text="Find country:" searchFilter={searchFilter} setNewFilter={setNewFilter} />
      <DisplayResults data={countries} searchFilter={searchFilter} />
    </>
  )
}

export default App
