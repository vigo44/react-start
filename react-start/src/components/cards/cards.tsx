import Card from '../card/card';
import './cards.css';
import { useEffect, useState } from 'react';
import { interfaceCharacter } from '../card/card';

function Cards() {
  const [cardsData, setCardsData] = useState<interfaceCharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [path, setPatch] = useState('https://rickandmortyapi.com/api/character');
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  async function fetchCards(path: RequestInfo | URL) {
    try {
      setError('');
      setLoading(true);
      const response = await fetch(path);
      if (response.ok) {
        const jsonData = await response.json();
        setCardsData(jsonData.results);
        setPrevPage(jsonData.info.prev);
        setNextPage(jsonData.info.next);
      } else {
        const errorFetch = new Error(`Network Error: response ${response.status}`);
        throw errorFetch;
      }
      setLoading(false);
    } catch (err: unknown) {
      setLoading(false);
      setError((err as Error).message);
    }
  }

  useEffect(() => {
    fetchCards(path);
  }, [path]);

  return (
    <>
      <div className="wrapper-button">
        <input
          className={'button ' + (prevPage == null ? 'button_inactive' : '')}
          type="button"
          value={'<<'}
          onClick={() => {
            if (prevPage) {
              setPatch(prevPage);
            }
          }}
        />
        <input
          className={'button ' + (nextPage == null ? 'button_inactive' : '')}
          type="button"
          value={'>>'}
          onClick={() => {
            if (nextPage) {
              setPatch(nextPage);
            }
          }}
        />
      </div>
      <div className="wrapper">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="characters">
          {cardsData.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
