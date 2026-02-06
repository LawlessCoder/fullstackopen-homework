const DisplayCountryInfo = ({ country }) => {
  const countryName = country.name.official;
  const countryCapital = country.capital;
  const countryArea = country.area;
  const countryLanguages = country.languages;
  const countryFlag = country.flags.png;

  console.log(`flag: ${countryFlag}`);
  return (
    <>
      <h1>{countryName}</h1>
      <p>Country's Capital: {countryCapital}</p>
      <p>Area: {countryArea}</p>
      <p>One country!</p>
      <h2>Languages</h2>
      <ul>
        {
          Object.values(countryLanguages)
            .map((language) => {
              return (<li key={language}>{language}</li>)
            })
        }
      </ul>
      <img src={countryFlag} alt={`${countryName}'s flag`}/>
    </>
  )
};

export default DisplayCountryInfo;
