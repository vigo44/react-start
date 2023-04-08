import Card from '../card/card';
import './cards.css';
import cardsData from '../../assets/data/card-data';

function Cards() {
  return (
    <div className="wrapper">
      <div className="characters">
        {cardsData.results.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
