import { FieldErrors, UseFormRegister } from 'react-hook-form';
import './inputs.css';
import { FormInputs } from '../form/form';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export default function NameInput(props: Props) {
  return (
    <label>
      <input
        className="input__name"
        type="text"
        {...props.register('user', {
          required: '*Please enter name!(minimum 4 characters)',
          minLength: {
            value: 4,
            message: '*Please enter name!(minimum 4 characters)',
          },
        })}
      />
      {props.errors.user && <span className="input__promptText">{props.errors.user.message}</span>}
    </label>
  );
}
