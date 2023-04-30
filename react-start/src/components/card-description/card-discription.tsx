import Loader from '../loader/loader';
import ErrorMessage from '../error-message/error-mesage';
import './card-description.css';
import { useAppSelector } from '../../hooks/redux';
import { useCardQuery } from '../../store/rick-morty.api';

export default function CardDescription() {
  const id = useAppSelector((state) => state.idDescription.idDescription);
  const { isLoading, data: cardData, isError, error } = useCardQuery(id);

  const charAlive =
    cardData?.status == 'Alive'
      ? 'discription__status_alive'
      : cardData?.status == 'Dead'
      ? 'discription__status_dead'
      : '';
  const discriptionStatusClasses = ['discription__status', charAlive];
  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={error} />}
      {!isError && !isLoading && (
        <>
          <div className="discription">
            <div className="discription__wrapper">
              <div className="discription__wrapper-img">
                <img className="discription__img" src={cardData?.image} />
              </div>
              <div className="discription__wrapper-content">
                <div className="discription__title">
                  <span className="discription__placeholder">name: </span>
                  {cardData?.name}
                </div>
                <div className="discription__content">
                  <span className="discription__placeholder">status: </span>
                  {cardData?.status}
                  <span className={discriptionStatusClasses.join(' ')} />
                </div>
                <div className="discription__content">
                  <span className="discription__placeholder">species: </span>
                  {cardData?.species}
                </div>
                <div className="discription__content">
                  <span className="discription__placeholder">gender: </span>
                  {cardData?.gender}
                </div>
              </div>
            </div>
            {cardData?.type && (
              <div className="discription__content">
                <span className="discription__placeholder">description: </span>
                {cardData?.type}
              </div>
            )}
            <div className="discription__content">
              <span className="discription__placeholder">origin location: </span>
              {cardData?.origin.name}
            </div>
            <div className="discription__content">
              <span className="discription__placeholder">location endpoint: </span>
              {cardData?.location.name}
            </div>
          </div>
        </>
      )}
    </>
  );
}
