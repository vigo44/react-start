import { ChangeEvent, useRef, useState } from 'react';
import './search.css';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setSearchInput, setQueryPath } from '../../store/search-input-slice';

function Search() {
  const searchInput = useAppSelector((state) => state.serchInput.searchInput);
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState(searchInput);
  const valueRef = useRef<string>(searchValue);
  const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    valueRef.current = e.target.value;
  };

  function handlerButton() {
    dispatch(setSearchInput(searchValue));
    dispatch(setQueryPath(`https://rickandmortyapi.com/api/character/?name=${searchValue}`));
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    handlerButton();
    event.preventDefault();
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input value={searchValue} onChange={handlerInput} placeholder="Please enter name" />
        <button type="button" onClick={handlerButton}>
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default Search;
