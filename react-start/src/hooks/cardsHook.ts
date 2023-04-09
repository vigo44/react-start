import { interfaceCharacter } from '../components/card/card';
import { useEffect, useState } from 'react';

export function useCards(link: string) {
  const [cardsData, setCardsData] = useState<interfaceCharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [path, setPath] = useState(link);
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
        let textError = '';
        if (response.body) {
          const jsonData = await response.json();
          textError = `OOPS! ${jsonData.error}`;
        } else {
          textError = `Network Error: response ${response.status}`;
        }
        const errorFetch = new Error(textError);
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
  return { cardsData, loading, error, prevPage, nextPage, setPath };
}
