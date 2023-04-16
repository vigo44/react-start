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

export interface CardProps extends interfaceCharacter {
  onDescription: (id: string) => void;
}

function Card(props: CardProps) {
  const charAlive =
    props.status == 'Alive'
      ? 'character__status_alive'
      : props.status == 'Dead'
      ? 'character__status_dead'
      : '';
  const charStatusClasses = ['character__status', charAlive];

  return (
    <div className="character" onClick={props.onDescription.bind(null, `${props.id}`)}>
      <div className="character__wrapper-title">
        <div className="character__title">{props.name}</div>
        <div className="character__wrapper-status">
          <div className={charStatusClasses.join(' ')} />
        </div>
      </div>
      <div className="character__wrapper-img">
        <img className="character__img" src={props.image} />
      </div>
    </div>
  );
}

export default Card;
