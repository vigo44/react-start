import NameInput from '../inputs/name-input';
import DateInput from '../inputs/date-input';
import ContinentSelect from '../inputs/continent-input';
import SendCheckInput from '../inputs/send-check-input';
import GenderInput from '../inputs/gender-input';
import AvatarInput from '../inputs/avatar-input';
import AcceptCheckInput from '../inputs/accept-check-input';
import { useForm } from 'react-hook-form';
import './form.css';

export interface FormInputs {
  user: string;
  date: string;
  continent: string;
  send: boolean;
  gender: string;
  avatar: FileList;
  accept: boolean;
}

export interface UserCard {
  user: string;
  date: string;
  continent: string;
  send: boolean;
  gender: string;
  avatar: string;
  accept: boolean;
}

interface Props {
  updateCards: (card: UserCard) => void;
}

function Form(props: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  function onSubmit(data: FormInputs) {
    const card = {
      user: data.user,
      date: data.date,
      continent: data.continent,
      send: data.send,
      gender: data.gender,
      avatar: URL.createObjectURL(data.avatar[0]),
      accept: true,
    };
    props.updateCards(card);
    reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__title">Enter user details</h2>
      <div className="form__input">
        User name: <NameInput register={register} errors={errors} />
      </div>
      <div className="form__input">
        Date of birth: <DateInput register={register} errors={errors} />
      </div>
      <div className="form__input">
        Choose continent:
        <ContinentSelect register={register} errors={errors} />
      </div>
      <div className="form__input">
        Send news in email?
        <SendCheckInput register={register} />
      </div>
      <fieldset className="form__input">
        Choose gender:
        <GenderInput register={register} errors={errors} />
      </fieldset>
      <div className="form__input">
        Upload avatar:
        <AvatarInput register={register} errors={errors} />
      </div>
      <div className="form__input">
        Are you sure?
        <AcceptCheckInput register={register} errors={errors} />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
