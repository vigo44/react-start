import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './search.css';

interface SearchProps {
  onSearch: (val: string) => void;
}

function Search(props: SearchProps) {
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
        <input value={searchValue} onChange={handlerInput} placeholder="Please enter name" />
        <button
          type="button"
          onClick={props.onSearch.bind(
            null,
            `https://rickandmortyapi.com/api/character/?name=${searchValue}`
          )}
        >
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default Search;
