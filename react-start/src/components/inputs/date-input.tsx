import { FieldErrors, UseFormRegister } from 'react-hook-form';
import './inputs.css';
import { FormInputs } from '../form/form';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export default function DateInput(props: Props) {
  return (
    <label>
      <input
        className="input__date"
        type="date"
        {...props.register('date', {
          required: '*Please enter a date!',
        })}
      />
      {props.errors.date && <span className="input__promptText">{props.errors.date.message}</span>}
    </label>
  );
}
