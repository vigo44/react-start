import React from 'react';
import Form from '../../components/form/form';
import CardsUser from '../../components/cards-user/cards-user';
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
}

class FormPage extends React.Component<Props, FormState> {
  constructor(props: Props) {
    super(props);
    this.state = { cards: [] };
  }

  updateCards = (card: userCard) => {
    this.setState({ cards: [...this.state.cards, card] });
  };

  render(): React.ReactNode {
    return (
      <div className="wrapperForm">
        <Form updateCards={this.updateCards} />
        <CardsUser cards={this.state.cards} />
      </div>
    );
  }
}
export default FormPage;
