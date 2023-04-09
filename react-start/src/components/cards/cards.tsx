import { useCards } from '../../hooks/cardsHook';
import Card from '../card/card';
import './cards.css';

function Cards() {
  const { cardsData, loading, error, prevPage, nextPage, setPatch } = useCards();

  return (
    <>
      <div className="wrapper-button">
        <input
          className={'button ' + (prevPage == null ? 'button_inactive' : '')}
          type="button"
          value={'<<'}
          onClick={() => {
            if (prevPage) {
              setPatch(prevPage);
            }
          }}
        />
        <input
          className={'button ' + (nextPage == null ? 'button_inactive' : '')}
          type="button"
          value={'>>'}
          onClick={() => {
            if (nextPage) {
              setPatch(nextPage);
            }
          }}
        />
      </div>
      <div className="wrapper">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="characters">
          {cardsData.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
