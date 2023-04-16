import { describe, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AboutUs from './pages/about-us/about-us';
import NotFound from './pages/not-found/not-found';

import cardsData from './assets/data/card-data';
import Card from './components/card/card';
import Search from './components/search/search';
import { Provider } from 'react-redux';
import { store } from '../src/store/index';

describe('App', () => {
  it('render App components', () => {
    //ARRANCE
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    //ACT
    //EXPEXT
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});

describe('About Us', () => {
  it('render About us components', () => {
    //ARRANCE
    render(<AboutUs />);
    //ACT
    //EXPEXT
    expect(screen.getByText(`It's all about us`)).toBeInTheDocument();
  });
});

describe('NotFound', () => {
  it('render not found page', () => {
    //ARRANCE
    render(<NotFound />);
    //ACT
    //EXPEXT
    expect(screen.getByText(`404 Page not found`)).toBeInTheDocument();
  });
});

describe('Cards tests', function () {
  it('should render Card', () => {
    //ARRANCE
    render(<Card {...cardsData.results[0]} onDescription={() => {}} />);
    //ACT
    //EXPEXT
    expect(screen.getByText(cardsData.results[0].name)).toBeInTheDocument();
  });
});

describe('search input test', function () {
  it('search input change', () => {
    //ARRANCE
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    //ACT
    fireEvent.change(input, { target: { value: 12345 } });
    //EXPEXT
    expect(input.value).toBe('12345');
  });
});

describe('test routing', function () {
  it('test patch /about us', async () => {
    //ARRANCE
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    //ACT
    const user = userEvent.setup();
    await user.click(screen.getAllByText(/about us/i)[1]);
    //EXPEXT
    expect(screen.getByText(`It's all about us`)).toBeInTheDocument();
  });

  it('test patch /home', async () => {
    //ARRANCE
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    //ACT
    const user = userEvent.setup();
    await user.click(screen.getAllByText(/about us/i)[1]);
    await user.click(screen.getAllByText(/home/i)[1]);
    //EXPEXT
    expect(screen.getByText(`SEARCH`)).toBeInTheDocument();
  });
});
