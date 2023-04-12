import Loader from '../loader/loader';
//import { useCards } from '../../hooks/cardsHook';
import Card from '../card/card';
import './cards.css';
import ErrorMessage from '../error-message/error-mesage';
import Modal from '../modal/modal';
import CardDescription from '../card-description/card-discription';
import { useState } from 'react';
import { interfaceCharacter } from '../card/card';

interface CardsProps {
  cardsData: interfaceCharacter[];
  loading: boolean;
  error: string;
  prevPage: string | null;
  nextPage: string | null;
  setPath: (val: string) => void;
}

function Cards(props: CardsProps) {
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
          className={
            'button ' +
            (props.prevPage == null || props.loading || props.error ? 'button_inactive' : '')
          }
          type="button"
          value={'<<'}
          onClick={() => {
            if (props.prevPage) {
              props.setPath(props.prevPage);
            }
          }}
        />
        <input
          className={
            'button ' +
            (props.nextPage == null || props.loading || props.error ? 'button_inactive' : '')
          }
          type="button"
          value={'>>'}
          onClick={() => {
            if (props.nextPage) {
              props.setPath(props.nextPage);
            }
          }}
        />
      </div>
      <div className="wrapper">
        {props.loading && <Loader />}
        {props.error && <ErrorMessage error={props.error} />}
        {!props.error && !props.loading && (
          <div className="characters">
            {props.cardsData.map((item) => {
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
