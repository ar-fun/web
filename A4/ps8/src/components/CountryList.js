import CountryCard from './CountryCard';

const CountryList = ({ countries }) => (
  <div className="country-list">
    {countries.length > 0 ? (
      countries.map((c) => <CountryCard key={c.cca3} country={c} />)
    ) : (
      <p>No countries found.</p>
    )}
  </div>
);
export default CountryList;