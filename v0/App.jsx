import { useState, useEffect } from "react";
import axios from "axios";
import FilterCountries from "./FilterCountries";
import Country from "./Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  function findCountry(e) {
    const lowerName = e.target.value.trim().toLowerCase();
    const countrie = lowerName;
    if (countrie === "") {
      setFilterCountries([]);
    } else {
      const filter = countries.filter((element) =>
        element.name.common.toLowerCase().includes(countrie)
      );
      setFilterCountries(filter);
    }
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => setCountries(data.data));
  }, []);

  return (
    <div>
      <div>
        find countries <input type="text" onChange={findCountry} />
        {filterCountries.length === 0 ? (
          <p>...</p>
        ) : filterCountries.length === 1 ? (
          <Country country={filterCountries[0]} />
        ) : filterCountries.length > 1 && filterCountries.length <= 10 ? (
          filterCountries.map((e) => (
            <FilterCountries
              key={e.name.official}
              name={e.name.common}
              countries={countries}
              filter={setFilterCountries}
            />
          ))
        ) : (
          <p>Too many matches, specify another filter</p>
        )}
      </div>
    </div>
  );
}

export default App;
