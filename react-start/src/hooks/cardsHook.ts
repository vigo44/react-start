import { interfaceCharacter } from '../components/card/card';
import { useEffect, useState } from 'react';

export function useCards() {
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
  return { cardsData, loading, error, prevPage, nextPage, setPatch };
}
