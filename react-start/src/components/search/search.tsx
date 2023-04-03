import { useEffect, useState } from 'react';
import './search.css';

function Search() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('value') || '');
  useEffect(() => {
    return () => {
      localStorage.value = searchValue;
    };
  });

  return (
    <div className="search">
      <form>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <button type="button">SEARCH</button>
      </form>
    </div>
  );
}

export default Search;
