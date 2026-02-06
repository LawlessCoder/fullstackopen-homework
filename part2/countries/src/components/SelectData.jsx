import { useEffect } from "react"

const SelectData = ({ searchFilter, data, setNewData }) => {
  useEffect(() => {
    const newData = searchFilter
      ? data.filter(country => 
        country.name.official.startsWith(searchFilter)
        )
      :  data;

      setNewData(newData);
  }, [ searchFilter ])

  return null;
}

export default SelectData;
