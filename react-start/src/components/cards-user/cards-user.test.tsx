import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardsUser from './cards-user';

const cardsEx = [
  {
    user: 'Obama',
    data: '2023-04-02',
    continent: 'Africa',
    send: false,
    gender: 'Male',
    avatar: '',
  },
  {
    user: 'Monika',
    data: '2023-04-02',
    continent: 'Africa',
    send: true,
    gender: 'Female',
    avatar: '',
  },
];

describe('App', () => {
  it('render Card', () => {
    //ARRANCE
    render(<CardsUser cards={cardsEx} />);
    //ACT

    //EXPEXT
    expect(screen.getByText(/name: Obama/i)).toBeInTheDocument();
    expect(screen.getByText(/name: Monika/i)).toBeInTheDocument();
  });
});
