import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import CountryList from './components/CountryList';
import Footer from './components/Footer';
import { fetchCountries } from './utils/countryApi';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  const handleSearch = async (name) => {
    const data = await fetchCountries(name);
    setCountries(data);
  };

  return (
    <div className="App">
      <Header />
      <Search onSearch={handleSearch} />
      <CountryList countries={countries} />
      <Footer />
    </div>
  );
}
export default App;