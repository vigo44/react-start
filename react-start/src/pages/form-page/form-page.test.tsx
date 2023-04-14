import { describe, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormPage from '../form-page/form-page';

import { Provider } from 'react-redux';
import { store } from '../../store/index';

describe('App', () => {
  it('render App components', async () => {
    //ARRANCE
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    //ACT
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /submit/i }));
    //EXPEXT
    expect(screen.getByText(`*Please enter name!(minimum 4 characters)`)).toBeInTheDocument();
    expect(screen.getByText(`*Please choose a continent!`)).toBeInTheDocument();
    const view = screen.getByText(/upload avatar:/i);
    expect(within(view).getByText(/\*please upload a photo!/i)).toBeInTheDocument();
  });
});
