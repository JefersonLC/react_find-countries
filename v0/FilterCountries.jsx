const FilterCountries = ({ name, countries, filter }) => {
  function filterCountry() {
    const country = countries.find((element) => element.name.common === name);
    filter([country]);
  }

  return (
    <div>
      {name} <button onClick={filterCountry}>show</button>
    </div>
  );
};

export default FilterCountries;
