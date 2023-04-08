import Card from '../card/card';
import './cards.css';
import { useEffect, useState } from 'react';
import { interfaceCharacter } from '../card/card';

function Cards() {
  const [cardsData, setCardsData] = useState<interfaceCharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchCards() {
    try {
      setError('');
      setLoading(true);
      const response = await fetch('https://rickandmortyapi.com/api/character');
      if (response.ok) {
        const jsonData = await response.json();
        setCardsData(jsonData.results);
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
    fetchCards();
  }, []);

  return (
    <div className="wrapper">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="characters">
        {cardsData.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
