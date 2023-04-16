import { useState } from 'react';
import Form from '../../components/form/form';
import CardsUser from '../../components/cards-user/cards-user';
import ModalWindows from '../../components/modal-window/modal-window';
import './form-page.css';
import { addUser } from '../../store/users-slice';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';

interface UserCard {
  user: string;
  date: string;
  continent: string;
  send: boolean;
  gender: string;
  avatar: string;
  accept: boolean;
}

function FormPage() {
  const cards = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();
  const [modalOpen, setModal] = useState(false);
  const [clearForm, setClearForm] = useState(false);

  const updateCards = (card: UserCard) => {
    dispatch(addUser(card));
    setModal(true);
    setClearForm(false);
  };

  const closeModal = () => {
    setModal(false);
    setClearForm(true);
  };

  return (
    <div className="wrapperForm">
      <Form updateCards={updateCards} clearForm={clearForm} />
      <CardsUser cards={cards} />
      <ModalWindows isOpen={modalOpen} close={closeModal} />
    </div>
  );
}

export default FormPage;
