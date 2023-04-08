import { useState } from 'react';
import './card.css';

interface interfaceCharacter {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  origin: {
    name?: string;
    url?: string;
  };
  location: {
    name?: string;
    url?: string;
  };
  image: string;
  episode: string[];
}

function Card(props: interfaceCharacter) {
  return (
    <div className="character">
      <div className="character__wrapper-title">
        <div className="character__title">{props.name}</div>
        <div className="character__wrapper-status">
          <div
            className={
              'character__status ' +
              (props.status == 'Alive'
                ? 'character__status_alive'
                : props.status == 'Dead'
                ? 'character__status_dead'
                : '')
            }
          />
        </div>
      </div>
      <div className="character__wrapper-img">
        <img className="character__img" src={props.image} />
      </div>
    </div>
  );
}

export default Card;
