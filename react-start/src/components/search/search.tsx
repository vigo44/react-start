import { ChangeEvent, useRef, useState } from 'react';
import './search.css';

interface SearchProps {
  onSearch: (val: string) => void;
}

function Search(props: SearchProps) {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('valueSearchInput') || '');
  const valueRef = useRef<string>(searchValue);
  const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    valueRef.current = e.target.value;
  };

  function handlerButton(path: string) {
    props.onSearch(path);
    localStorage.valueSearchInput = searchValue;
  }

  return (
    <div className="search">
      <form>
        <input value={searchValue} onChange={handlerInput} placeholder="Please enter name" />
        <button
          type="button"
          onClick={handlerButton.bind(
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
