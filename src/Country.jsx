import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=f7cb656024e385f152950c137455dbfc&query=${country.name.common}`
      )
      .then((data) => setCountryInfo(data.data.current));
  }, [Country]);
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>
        capital {country.capital[0]}
        <br />
        population {country.population}
      </p>
      <h2>Spoken languages</h2>
      <ul>
        {Object.keys(country.languages).map((e) => (
          <li key={e}>{country.languages[e]}</li>
        ))}
      </ul>
      <img src={country.flags.png} />
      <h2>Weather in {country.name.common}</h2>
      <p>
        <strong>temperature:</strong> {countryInfo.temperature}
      </p>
      <img src={countryInfo.weather_icons} />
      <p>
        <strong>wind:</strong> {countryInfo["wind_speed"]} mph direction{" "}
        {countryInfo["wind_dir"]}
      </p>
    </>
  );
};

export default Country;
