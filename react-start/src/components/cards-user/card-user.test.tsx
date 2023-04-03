import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardUser from './card-user';

describe('App', () => {
  it('render Card', () => {
    //ARRANCE
    render(
      <CardUser
        key={1}
        user={'Obama'}
        data={'2023-04-02'}
        continent={'Africa'}
        send={true}
        gender={'Female'}
        avatar={''}
      />
    );
    //ACT

    //EXPEXT
    expect(screen.getByText(/name: Obama/i)).toBeInTheDocument();
    expect(screen.getByText(/was born:2023\-04\-02/i)).toBeInTheDocument();
    expect(screen.getByText(/from: africa/i)).toBeInTheDocument();
    expect(screen.getByText(/gender: female/i)).toBeInTheDocument();
    expect(screen.getByText(/news: sent/i)).toBeInTheDocument();
  });
});

describe('App', () => {
  it('render Card (dont send)', () => {
    //ARRANCE
    render(
      <CardUser
        key={1}
        user={'Obama'}
        data={'2023-04-02'}
        continent={'Africa'}
        send={false}
        gender={'Female'}
        avatar={''}
      />
    );
    //ACT

    //EXPEXT
    expect(screen.getByText(/news: don't sent/i)).toBeInTheDocument();
  });
});
