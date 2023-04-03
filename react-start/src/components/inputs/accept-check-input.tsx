import React from 'react';
import './inputs.css';

type Props = {
  refInput: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export default class AcceptCheckInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <label>
        <input className="input__accept-check" type="checkbox" ref={this.props.refInput} />
        <span
          className="input__promptText"
          style={{ visibility: !this.props.isValid ? 'visible' : 'hidden' }}
        >
          *Please accept!
        </span>
      </label>
    );
  }
}
