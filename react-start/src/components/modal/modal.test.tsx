import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Modal from './modal';

describe('App', () => {
  it('render App components', () => {
    //ARRANCE

    render(<Modal onExit={() => {}}>Hello World</Modal>);
    //ACT
    //EXPEXT
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
