import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';
import cartsData from '../assets/data/card-data';
import { renderHook, waitFor } from '@testing-library/react';
import { useCard } from './cardHook';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe('testing hook api', () => {
  //ARRANCE
  beforeEach(() => {
    fetchMocker.resetMocks();
  });

  it('calls returns data to me', async () => {
    fetchMocker.mockResponseOnce(JSON.stringify(cartsData.results[1]));

    const { result } = renderHook(async () =>
      useCard('https://rickandmortyapi.com/api/character/2')
    );
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    //ACT
    //EXPEXT
    expect((await result.current).cardData?.name).toEqual('Morty Smith');
  });
});

describe('testing hook api', () => {
  //ARRANCE
  beforeEach(() => {
    fetchMocker.resetMocks();
  });

  it('calls returns data to me', async () => {
    fetchMocker.mockResponseOnce(JSON.stringify({ error: 'fake error' }), { status: 404 });

    const { result } = renderHook(async () =>
      useCard('https://rickandmortyapi.com/api/character/2')
    );
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    //ACT
    //EXPEXT

    expect((await result.current).error).toEqual('Network Error: response 404');
  });
});
