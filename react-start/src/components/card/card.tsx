import { useState } from 'react';
import './card.css';

export interface interfaceCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
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
  const charAlive =
    props.status == 'Alive'
      ? 'character__status_alive'
      : props.status == 'Dead'
      ? 'character__status_dead'
      : '';
  const charStatusClasses = ['character__status', charAlive];
  const [details, setDetails] = useState(false);
  return (
    <div
      className="character"
      onClick={() => {
        setDetails((prev) => !prev);
      }}
    >
      <div className="character__wrapper-title">
        <div className="character__title">{props.name}</div>
        <div className="character__wrapper-status">
          <div className={charStatusClasses.join(' ')} />
        </div>
      </div>
      <div className="character__wrapper-img">
        <img className="character__img" src={props.image} />
      </div>
      {details && <div>{props.species}</div>}
    </div>
  );
}

export default Card;
