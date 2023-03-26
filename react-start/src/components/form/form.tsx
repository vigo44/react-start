import React from 'react';
import NameInput from '../inputs/name-input';
//import './form.css';

class Form extends React.Component {
  nameInput: React.RefObject<HTMLInputElement> = React.createRef();

  state = {
    nameValid: true,
  };

  nameValidation = async () => {
    const name = this.nameInput.current?.value;
    if (name && name?.length >= 4) {
      this.setState({ nameValid: true });
    } else {
      this.setState({ nameValid: false });
    }
  };

  handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await this.nameValidation();
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2 className="form__title">Enter your details</h2>
        <div className="field">
          UserName: <NameInput refInput={this.nameInput} isValid={this.state.nameValid} />
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
