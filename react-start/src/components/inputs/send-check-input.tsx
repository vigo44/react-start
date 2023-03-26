import React from 'react';
import './inputs.css';

type Props = {
  refInput: React.RefObject<HTMLInputElement>;
};

export default class SendCheckInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <label>
        <input className="input__send-check" type="checkbox" ref={this.props.refInput} />
      </label>
    );
  }
}
