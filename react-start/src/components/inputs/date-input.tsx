import React from 'react';
import './inputs.css';

type Props = {
  refInput: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export default class DateInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <label>
        <input className="input__date" type="date" ref={this.props.refInput} />
        <span
          className="input__promptText"
          style={{ visibility: !this.props.isValid ? 'visible' : 'hidden' }}
        >
          *Please enter date!
        </span>
      </label>
    );
  }
}
