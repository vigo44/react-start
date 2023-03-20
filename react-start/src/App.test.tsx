import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AboutUs from './pages/about-us';
import NotFound from './pages/not-found';

import cardsData from './assets/data/card-data';
import Card from './components/card';
import Cards from './components/cards';

describe('App', () => {
  it('render App components', () => {
    //ARRANCE
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
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
    render(<Card {...cardsData[0]} />);
    //ACT
    //EXPEXT
    expect(screen.getByText(cardsData[0].title)).toBeInTheDocument();
    expect(screen.getByText(cardsData[0].category)).toBeInTheDocument();
    expect(screen.getByText(cardsData[0].brand)).toBeInTheDocument();
    expect(screen.getByText(cardsData[0].rating)).toBeInTheDocument();
    expect(screen.getByText(cardsData[0].discountPercentage)).toBeInTheDocument();
    expect(screen.getByText(cardsData[0].price)).toBeInTheDocument();
    expect(screen.getByText(cardsData[0].stock)).toBeInTheDocument();
  });

  it('should render Cards', () => {
    //ARRANCE
    render(<Cards />);
    //ACT
    //EXPEXT
    cardsData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
