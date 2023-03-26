import React from 'react';
import './inputs.css';

type Props = {
  refInput: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export default class AvatarInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <label>
        <input className="input__avatar" type="file" ref={this.props.refInput} accept="image/*" />
        <span
          className="input__promptText"
          style={{ visibility: !this.props.isValid ? 'visible' : 'hidden' }}
        >
          *Please upload a photo!
        </span>
      </label>
    );
  }
}
