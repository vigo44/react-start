import React from 'react';
import CardUser from './card-user';
import './cards-user.css';

interface Props {
  cards: Card[];
}

interface Card {
  user: string;
  date: string;
  continent: string;
  send: boolean;
  gender: string;
  avatar: string;
}

export default class CardsUser extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="cards-user">
        {this.props.cards.map((item, key) => {
          return (
            <CardUser
              key={key}
              user={item.user}
              date={item.date}
              continent={item.continent}
              send={item.send}
              gender={item.gender}
              avatar={item.avatar}
            />
          );
        })}
      </div>
    );
  }
}
