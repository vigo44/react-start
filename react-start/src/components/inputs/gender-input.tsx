import React from 'react';
import './inputs.css';

type Props = {
  inputMale: React.RefObject<HTMLInputElement>;
  inputFemale: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export default class NameInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="input__genders">
        <label className="input__gender">
          <span>Male</span>
          <input ref={this.props.inputMale} name="gender" value="Male" type="radio" />
        </label>
        <label className="input__gender">
          <span>Female</span>
          <input value="Female" ref={this.props.inputFemale} name="gender" type="radio" />
        </label>
        <span
          className="input__promptText"
          style={{ visibility: !this.props.isValid ? 'visible' : 'hidden' }}
        >
          *Please choose a gender!
        </span>
      </div>
    );
  }
}
