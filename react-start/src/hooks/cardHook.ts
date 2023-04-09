import { interfaceCharacter } from '../components/card/card';
import { useEffect, useState } from 'react';

export function useCard(link: string) {
  const [cardData, setCardData] = useState<interfaceCharacter>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchCards(path: RequestInfo | URL) {
    try {
      setError('');
      setLoading(true);
      const response = await fetch(path);
      if (response.ok) {
        const jsonData = await response.json();
        setCardData(jsonData);
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
    fetchCards(link);
  }, [link]);
  return { cardData, loading, error };
}
