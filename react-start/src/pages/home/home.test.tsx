import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';
import cartsData from '../../assets/data/card-data';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './home';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe('testing api', () => {
  //ARRANCE
  beforeEach(() => {
    fetchMocker.resetMocks();
  });

  it('calls returns data to me', async () => {
    fetchMocker.mockResponse(JSON.stringify(cartsData));

    render(<Home />);
    //ACT
    //EXPEXT
    await screen.findByText(/rick sanchez/i);
    expect(screen.getByText(/rick sanchez/i)).toBeInTheDocument();
    expect(screen.getByText(/adjudicator rick/i)).toBeInTheDocument();
  });
});

describe('testing api card-description', () => {
  //ARRANCE
  beforeEach(() => {
    fetchMocker.resetMocks();
  });

  it('calls returns data to me', async () => {
    fetchMocker.mockResponse(JSON.stringify(cartsData));

    render(<Home />);
    //ACT
    const user = userEvent.setup();
    await screen.findByText(/alan rails/i);
    fetchMocker.mockResponseOnce(JSON.stringify(cartsData.results[9]));
    await user.click(await screen.findByText(/alan rails/i));

    //EXPEXT
    await screen.findByText(/superhuman \(ghost trains summoner\)/i);
    expect(screen.getByText(/superhuman \(ghost trains summoner\)/i)).toBeInTheDocument();
  });
});
