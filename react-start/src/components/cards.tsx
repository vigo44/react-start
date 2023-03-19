import React from 'react';
import Card from './card';
import './cards.css';
import cardsData from '../assets/data/card-data';

class Cards extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="products">
          {cardsData.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </div>
    );
  }
}

export default Cards;
