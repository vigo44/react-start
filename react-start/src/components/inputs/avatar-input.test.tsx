import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AvatarInput from './avatar-input';
import React from 'react';

describe('Input', () => {
  it('render avatar input', async () => {
    //ARRANCE
    const avatarInput: React.RefObject<HTMLInputElement> = React.createRef();
    render(<AvatarInput refInput={avatarInput} isValid={true} />);
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    //ACT
    const inputAvatar = screen.getByLabelText(/\*please upload a photo!/i) as HTMLInputElement;
    userEvent.setup();
    await userEvent.upload(inputAvatar, file);
    //EXPEXT
    expect(inputAvatar.files![0]).toStrictEqual(file);
    expect(inputAvatar.files!.item(0)).toStrictEqual(file);
    expect(inputAvatar.files).toHaveLength(1);
  });
});
