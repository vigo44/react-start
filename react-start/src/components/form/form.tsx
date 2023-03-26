import React from 'react';
import NameInput from '../inputs/name-input';
import DateInput from '../inputs/date-input';
//import './form.css';

class Form extends React.Component {
  nameInput: React.RefObject<HTMLInputElement> = React.createRef();
  dateInput: React.RefObject<HTMLInputElement> = React.createRef();

  state = {
    nameValid: true,
    dateValid: true,
  };

  nameValidation = async () => {
    const name = this.nameInput.current?.value;
    if (name && name?.length >= 4) {
      this.setState({ nameValid: true });
    } else {
      this.setState({ nameValid: false });
    }
  };

  dateValidation = async () => {
    const date = this.dateInput.current?.value;
    if (date) {
      this.setState({ dateValid: true });
    } else {
      this.setState({ dateValid: false });
    }
  };

  handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await this.nameValidation();
    await this.dateValidation();
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2 className="form__title">Enter your details</h2>
        <div className="form__input">
          UserName: <NameInput refInput={this.nameInput} isValid={this.state.nameValid} />
        </div>
        <div className="form__input">
          Date of birth: <DateInput refInput={this.dateInput} isValid={this.state.dateValid} />
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
