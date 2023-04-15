import Loader from '../loader/loader';
import Card from '../card/card';
import './cards.css';
import ErrorMessage from '../error-message/error-mesage';
import Modal from '../modal/modal';
import CardDescription from '../card-description/card-discription';
import { useState } from 'react';
import { useCardsQuery } from '../../store/rick-morty.api';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setQueryPath } from '../../store/search-input-slice';

function Cards() {
  const path = useAppSelector((state) => state.serchInput.queryPath);
  const {
    isLoading,
    data = { results: [], info: { prev: null, next: null } },
    isError,
    error,
  } = useCardsQuery(path);
  const dispatch = useAppDispatch();

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
            'button ' + (data.info.prev == null || isLoading || isError ? 'button_inactive' : '')
          }
          type="button"
          value={'<<'}
          onClick={() => {
            if (data.info.prev) {
              dispatch(setQueryPath(data.info.prev));
            }
          }}
        />
        <input
          className={
            'button ' + (data.info.next == null || isLoading || isError ? 'button_inactive' : '')
          }
          type="button"
          value={'>>'}
          onClick={() => {
            if (data.info.next) {
              dispatch(setQueryPath(data.info.next));
            }
          }}
        />
      </div>
      <div className="wrapper">
        {isLoading && <Loader />}
        {isError && <ErrorMessage error={error} />}
        {/* {isError && console.log(error)} */}
        {!isError && !isLoading && (
          <div className="characters">
            {data.results.map((item) => {
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
