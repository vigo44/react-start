import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './search.css';

function Search() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('value') || '');
  const valueRef = useRef<string>(searchValue);
  const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    valueRef.current = e.target.value;
  };

  useEffect(() => {
    return () => {
      localStorage.value = valueRef.current;
    };
  }, []);

  return (
    <div className="search">
      <form>
        <input value={searchValue} onChange={handlerInput} />
        <button type="button">SEARCH</button>
      </form>
    </div>
  );
}

export default Search;
