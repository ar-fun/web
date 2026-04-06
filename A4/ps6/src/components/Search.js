import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');
  return (
    <div className="search-box">
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter city..." />
      <button onClick={() => onSearch(input)}>Search</button>
    </div>
  );
};
export default Search;