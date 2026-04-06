const Search = ({ onSearch }) => (
  <div className="search-container">
    <input 
      type="text" 
      placeholder="Enter country name..." 
      onChange={(e) => onSearch(e.target.value)} 
    />
  </div>
);
export default Search;