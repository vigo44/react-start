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
    fetchMocker.mockResponseOnce(JSON.stringify(cartsData));

    render(<Home />);
    //ACT
    //EXPEXT
    setTimeout(() => {
      expect(screen.getByText(/rick sanchez/i)).toBeInTheDocument();
      expect(screen.getByText(/adjudicator rick/i)).toBeInTheDocument();
    }, 500);
  });
});

describe('testing api card-description', () => {
  //ARRANCE
  beforeEach(() => {
    fetchMocker.resetMocks();
  });

  it('calls returns data to me', async () => {
    fetchMocker.mockResponseOnce(JSON.stringify(cartsData));

    render(<Home />);
    //ACT
    const user = userEvent.setup();
    setTimeout(async () => {
      await user.click(screen.getByText(/alan rails/i));
    }, 500);

    //EXPEXT
    setTimeout(() => {
      expect(screen.getByText(/superhuman \(ghost trains summoner\)/i)).toBeInTheDocument();
    }, 500);
  });
});
