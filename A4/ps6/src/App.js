import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import { fetchWeather } from './utils/weatherApi';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <Search onSearch={handleSearch} />
      <Dashboard data={weather} />
      <Footer />
    </div>
  );
}
export default App;