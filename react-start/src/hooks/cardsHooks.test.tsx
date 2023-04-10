import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';
import cartsData from '../assets/data/card-data';
import { renderHook, waitFor } from '@testing-library/react';
import { useCards } from './cardsHook';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe('testing hook api', () => {
  //ARRANCE
  beforeEach(() => {
    fetchMocker.resetMocks();
  });

  it('calls returns data to me', async () => {
    fetchMocker.mockResponseOnce(JSON.stringify(cartsData));

    const { result } = renderHook(async () =>
      useCards('https://rickandmortyapi.com/api/character')
    );
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    //ACT
    //EXPEXT
    expect((await result.current).cardsData[0].name).toEqual('Rick Sanchez');
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
      useCards('https://rickandmortyapi.com/api/character')
    );
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    //ACT
    //EXPEXT

    expect((await result.current).error).toEqual('OOPS! fake error');
  });
});
