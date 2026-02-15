import { useState, useEffect } from "react"
import { isEmpty } from "../utilities/isEmpty"

import DisplayCountryInfo from "./DisplayCountryInfo"
import DisplayCountryList from "./DisplayCountryList"

const DisplayResults = ({ data, searchFilter, countryToShow, setCountryToShow }) => {
  let displayData = []

  if (searchFilter != "") {
    displayData = data.filter((country) => country.name.official.toLowerCase().startsWith(searchFilter.toLowerCase()))

    const numberOfCountries = displayData.length

    let countryPopulated = isEmpty(countryToShow)

    if (!countryPopulated) {
      return (
        <DisplayCountryInfo country={countryToShow} />
      )
    } else if (numberOfCountries === 1) {
      return (
        <DisplayCountryInfo country={displayData[0]} />
      )
    } else if (numberOfCountries > 0 && numberOfCountries <= 10) {
      return (
        <DisplayCountryList countries={data} searchFilter={searchFilter} setCountryToShow={setCountryToShow} />
      )
    } else if (numberOfCountries > 10) {
      return <p>Too many matches, specify another filter</p>
    } else {
      return <p>No matches!</p> 
    }
  }

};

export default DisplayResults;
