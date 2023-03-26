import React from 'react';
import './inputs.css';

type Props = {
  refInput: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export default class NameInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <label>
        <input className="input__name" type="text" ref={this.props.refInput} />
        <span
          className="input__promptText"
          style={{ visibility: !this.props.isValid ? 'visible' : 'hidden' }}
        >
          *Please enter name!(minimum 4 characters)
        </span>
      </label>
    );
  }
}
