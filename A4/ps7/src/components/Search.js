import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  return (
    <div className="search-bar">
      <input 
        value={term} 
        onChange={(e) => setTerm(e.target.value)} 
        placeholder="Search title or keyword..." 
      />
      <button onClick={() => onSearch(term)}>Search</button>
    </div>
  );
};
export default Search;