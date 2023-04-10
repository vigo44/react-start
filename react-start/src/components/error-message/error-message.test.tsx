import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './error-mesage';

describe('App', () => {
  it('render App components', () => {
    //ARRANCE

    render(<ErrorMessage error="Alarm" />);
    //ACT
    //EXPEXT
    expect(screen.getByText(/alarm/i)).toBeInTheDocument();
  });
});
