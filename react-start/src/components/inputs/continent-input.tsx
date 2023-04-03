import React from 'react';
import './inputs.css';

type Props = {
  refSelect: React.RefObject<HTMLSelectElement>;
  isValid: boolean;
};

export default class ContinentInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <label>
        <select className="input__continent" ref={this.props.refSelect}>
          <option value="null">--Please choose a continent--</option>
          <option value="Eurasia">Eurasia</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Australia">Australia</option>
          <option value="Antarctica">Antarctica</option>
        </select>
        <span
          className="input__promptText"
          style={{ visibility: !this.props.isValid ? 'visible' : 'hidden' }}
        >
          *Please choose a continent!
        </span>
      </label>
    );
  }
}
