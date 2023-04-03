import React from 'react';
import NameInput from '../inputs/name-input';
import DateInput from '../inputs/date-input';
import СontinentSelect from '../inputs/continent-input';
import SendCheckInput from '../inputs/send-check-input';
import GenderInput from '../inputs/gender-input';
import AvatarInput from '../inputs/avatar-input';
import AcceptCheckInput from '../inputs/accept-check-input';
import './form.css';

interface userCard {
  user: string;
  data: string;
  continent: string;
  send: boolean;
  gender: string;
  avatar: string | false;
}

interface Props {
  updateCards: (card: userCard) => void;
  form: React.RefObject<HTMLFormElement>;
}

class Form extends React.Component<Props> {
  nameInput: React.RefObject<HTMLInputElement> = React.createRef();
  dateInput: React.RefObject<HTMLInputElement> = React.createRef();
  continentSelect: React.RefObject<HTMLSelectElement> = React.createRef();
  sendCheckInput: React.RefObject<HTMLInputElement> = React.createRef();
  radioInputMale: React.RefObject<HTMLInputElement> = React.createRef();
  radioInputFemale: React.RefObject<HTMLInputElement> = React.createRef();
  avatarInput: React.RefObject<HTMLInputElement> = React.createRef();
  acceptCheckInput: React.RefObject<HTMLInputElement> = React.createRef();
  formRef: React.RefObject<HTMLFormElement> = React.createRef();

  state = {
    nameValid: true,
    dateValid: true,
    continentValid: true,
    avatarValid: true,
    acceptValid: true,
    genderValid: true,
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

  continentValidation = async () => {
    const continent = this.continentSelect.current?.value;
    if (continent && continent !== 'null') {
      this.setState({ continentValid: true });
    } else {
      this.setState({ continentValid: false });
    }
  };

  genderValidation = async () => {
    const male = this.radioInputMale.current?.checked;
    const female = this.radioInputFemale.current?.checked;
    if (male || female) {
      this.setState({ genderValid: true });
    } else {
      this.setState({ genderValid: false });
    }
  };

  avatarValidation = async () => {
    const avatar = this.avatarInput.current?.value;
    if (avatar) {
      this.setState({ avatarValid: true });
    } else {
      this.setState({ avatarValid: false });
    }
  };

  acceptValidation = async () => {
    const accept = this.acceptCheckInput.current?.checked;
    if (accept) {
      this.setState({ acceptValid: true });
    } else {
      this.setState({ acceptValid: false });
    }
  };

  newCard() {
    const card = {
      user: this.nameInput.current?.value as string,
      data: this.dateInput.current?.value as string,
      continent: this.continentSelect.current?.value as string,
      send: this.sendCheckInput.current?.checked as boolean,
      gender: this.radioInputMale.current?.checked
        ? (this.radioInputMale.current?.value as string)
        : (this.radioInputFemale.current?.value as string),
      avatar:
        this.avatarInput.current !== null &&
        this.avatarInput.current.files !== null &&
        URL.createObjectURL(this.avatarInput.current.files[0]),
    };
    this.props.updateCards(card);
  }

  handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await this.nameValidation();
    await this.dateValidation();
    await this.continentValidation();
    await this.genderValidation();
    await this.avatarValidation();
    await this.acceptValidation();

    if (
      this.state.nameValid &&
      this.state.dateValid &&
      this.state.continentValid &&
      this.state.genderValid &&
      this.state.avatarValid &&
      this.state.acceptValid
    ) {
      this.newCard();
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} ref={this.props.form}>
        <h2 className="form__title">Enter user details</h2>
        <div className="form__input">
          User name: <NameInput refInput={this.nameInput} isValid={this.state.nameValid} />
        </div>
        <div className="form__input">
          Date of birth: <DateInput refInput={this.dateInput} isValid={this.state.dateValid} />
        </div>
        <div className="form__input">
          Choose continent:
          <СontinentSelect refSelect={this.continentSelect} isValid={this.state.continentValid} />
        </div>
        <div className="form__input">
          Send news in email?
          <SendCheckInput refInput={this.sendCheckInput} />
        </div>
        <fieldset className="form__input">
          Choose gender:
          <GenderInput
            inputMale={this.radioInputMale}
            inputFemale={this.radioInputFemale}
            isValid={this.state.genderValid}
          />
        </fieldset>
        <div className="form__input">
          Upload avatar:
          <AvatarInput refInput={this.avatarInput} isValid={this.state.avatarValid} />
        </div>
        <div className="form__input">
          Are you sure?
          <AcceptCheckInput refInput={this.acceptCheckInput} isValid={this.state.acceptValid} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
