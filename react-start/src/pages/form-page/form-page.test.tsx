import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormPage from '../form-page/form-page';

describe('App', () => {
  it('render App components', async () => {
    //ARRANCE
    render(<FormPage />);
    //ACT
    const user = userEvent.setup();
    await user.click(screen.getAllByText(/submit/i)[0]);
    //EXPEXT
    expect(screen.getByText(`*Please enter name!(minimum 4 characters)`)).toBeInTheDocument();
    expect(screen.getByText(`*Please choose a continent!`)).toBeInTheDocument();
    expect(screen.getByText(`*Please upload a photo!`)).toBeInTheDocument();
  });
});
