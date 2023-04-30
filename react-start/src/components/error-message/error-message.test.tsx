import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './error-mesage';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

const errorMock = {
  status: 200,
  data: {
    error: 'There is nothing here',
  },
};

describe('App', () => {
  it('render App components', () => {
    //ARRANCE

    render(<ErrorMessage error={errorMock as unknown as FetchBaseQueryError} />);
    //ACT
    //EXPEXT
    expect(screen.getByText(/OOPS! There is nothing here/i)).toBeInTheDocument();
  });
});
