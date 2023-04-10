import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';
import cartsData from '../../assets/data/card-data';
import { render, screen } from '@testing-library/react';

import CardDescription from './card-discription';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe('testing card-description', () => {
  //ARRANCE
  beforeEach(() => {
    fetchMocker.resetMocks();
  });

  it('calls returns data to me', async () => {
    fetchMocker.mockResponseOnce(JSON.stringify(cartsData.results[0]));

    render(<CardDescription link="https://rickandmortyapi.com/api/character/1" />);
    //ACT
    //EXPEXT
    await screen.findByText(/rick sanchez/i);
    expect(screen.getByText(/earth \(c\-137\)/i)).toBeInTheDocument();
  });
});
