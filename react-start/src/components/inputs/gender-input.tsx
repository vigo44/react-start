import React from 'react';
import './inputs.css';

type Props = {
  inputMale: React.RefObject<HTMLInputElement>;
  inputFemale: React.RefObject<HTMLInputElement>;
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
          <input
            defaultChecked
            ref={this.props.inputMale}
            name="gender"
            value="Male"
            type="radio"
          />
        </label>
        <label className="input__gender">
          <span>Female</span>
          <input value="Female" ref={this.props.inputFemale} name="gender" type="radio" />
        </label>
      </div>
    );
  }
}
