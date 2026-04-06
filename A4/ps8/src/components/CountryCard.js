const CountryCard = ({ country }) => (
  <div className="country-card">
    <img src={country.flags.svg} alt={`${country.name.common} flag`} />
    <h3>{country.name.common}</h3>
    <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    <p><strong>Region:</strong> {country.region}</p>
  </div>
);
export default CountryCard;