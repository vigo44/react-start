import { FieldErrors, UseFormRegister } from 'react-hook-form';
import './inputs.css';
import { FormInputs } from '../form/form';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export default function GenderInput(props: Props) {
  return (
    <div className="input__genders">
      <label className="input__gender">
        <span>Male</span>
        <input
          {...props.register('gender', {
            required: '*Please choose a gender!',
          })}
          name="gender"
          value="Male"
          type="radio"
        />
      </label>
      <label className="input__gender">
        <span>Female</span>
        <input
          value="Female"
          {...props.register('gender', {
            required: '*Please choose a gender!',
          })}
          name="gender"
          type="radio"
        />
      </label>
      {props.errors.gender && (
        <span className="input__promptText">{props.errors.gender.message}</span>
      )}
    </div>
  );
}
