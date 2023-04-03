import { FieldErrors, UseFormRegister } from 'react-hook-form';
import './inputs.css';
import { FormInputs } from '../form/form';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export default function AcceptCheckInput(props: Props) {
  return (
    <label>
      <input
        className="input__accept-check"
        type="checkbox"
        {...props.register('accept', {
          required: '*Please upload a photo!',
        })}
      />
      {props.errors.accept && (
        <span className="input__promptText">{props.errors.accept.message}</span>
      )}
    </label>
  );
}
