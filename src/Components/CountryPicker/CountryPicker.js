import React, { useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchAllCountries } from "../Api/api";

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = React.useState([]);
  useEffect(() => {
    fetchAllCountries().then(response => {
      console.log({ response });
      const country = response.data.countries.map(country => country.name);
      setFetchedCountries(country);
    });
  }, []);

  return (
    <FormControl>
      <NativeSelect>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
