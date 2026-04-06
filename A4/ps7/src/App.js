import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';
import { searchBooks } from './utils/bookApi';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchBooks(query);
    setBooks(results);
  };

  return (
    <div className="App">
      <div className="content-wrap">
        <Header />
        <Search onSearch={handleSearch} />
        <BookList books={books} />
      </div>
      <footer className="footer">
        Name: Anshul Raj, Reg No: 24BAI0183
      </footer>
    </div>
  );
}
export default App;