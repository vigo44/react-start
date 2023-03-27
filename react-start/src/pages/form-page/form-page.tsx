import React from 'react';
import Form from '../../components/form/form';
import CardsUser from '../../components/cards-user/cards-user';
import ModalWindows from '../../components/modal-window/modal-window';
import './form-page.css';

interface Props {
  children?: React.ReactNode;
}

interface userCard {
  user: string;
  data: string;
  continent: string;
  send: boolean;
  gender: string;
  avatar: string | false;
}

interface FormState {
  cards: userCard[];
  modalOpen: boolean;
}

class FormPage extends React.Component<Props, FormState> {
  formRef: React.RefObject<HTMLFormElement> = React.createRef();

  constructor(props: Props) {
    super(props);
    this.state = { cards: [], modalOpen: false };
  }

  updateCards = (card: userCard) => {
    this.setState({ cards: [...this.state.cards, card], modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
    this.formRef.current?.reset();
  };

  render(): React.ReactNode {
    return (
      <div className="wrapperForm">
        <Form updateCards={this.updateCards} form={this.formRef} />
        <CardsUser cards={this.state.cards} />
        <ModalWindows isOpen={this.state.modalOpen} close={this.closeModal} />
      </div>
    );
  }
}
export default FormPage;
