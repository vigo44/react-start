import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import ModalWindows from '../modal-window/modal-window';

describe('App', () => {
  it('render App components', async () => {
    //ARRANCE
    render(<ModalWindows isOpen={true} close={() => false} />);
    //ACT

    //EXPEXT
    expect(screen.getByText(`User is saved!`)).toBeInTheDocument();
  });
});
