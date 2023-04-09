import Loader from '../loader/loader';
import { useCards } from '../../hooks/cardsHook';
import Card from '../card/card';
import './cards.css';
import ErrorMessage from '../error-message/error-mesage';
import Modal from '../modal/modal';
import CardDescription from '../card-description/card-discription';
import { useState } from 'react';

function Cards() {
  const { cardsData, loading, error, prevPage, nextPage, setPatch } = useCards();
  const [modal, setModal] = useState(false);
  const [linkDescription, setLinkDescription] = useState('');

  function handlerOnDescription(id: string) {
    setModal(true);
    setLinkDescription(`https://rickandmortyapi.com/api/character/${id}`);
  }

  return (
    <>
      <div className="wrapper-button">
        <input
          className={'button ' + (prevPage == null || loading || error ? 'button_inactive' : '')}
          type="button"
          value={'<<'}
          onClick={() => {
            if (prevPage) {
              setPatch(prevPage);
            }
          }}
        />
        <input
          className={'button ' + (nextPage == null || loading || error ? 'button_inactive' : '')}
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
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {!error && !loading && (
          <div className="characters">
            {cardsData.map((item) => {
              return <Card key={item.id} {...item} onDescription={handlerOnDescription} />;
            })}
          </div>
        )}
      </div>
      {modal && (
        <Modal
          onExit={() => {
            setModal(false);
          }}
        >
          <CardDescription link={linkDescription} />
        </Modal>
      )}
    </>
  );
}

export default Cards;
