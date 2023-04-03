import { FieldErrors, UseFormRegister } from 'react-hook-form';
import './inputs.css';
import { FormInputs } from '../form/form';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export default function AvatarInput(props: Props) {
  return (
    <label>
      <input
        className="input__avatar"
        type="file"
        {...props.register('avatar', {
          required: '*Please upload a photo!',
        })}
        accept="image/*"
      />
      {props.errors.avatar && (
        <span className="input__promptText">{props.errors.avatar.message}</span>
      )}
    </label>
  );
}
