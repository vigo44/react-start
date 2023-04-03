import { FieldErrors, UseFormRegister } from 'react-hook-form';
import './inputs.css';
import { FormInputs } from '../form/form';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export default function ContinentInput(props: Props) {
  return (
    <label>
      <select
        className="input__continent"
        {...props.register('continent', {
          required: '*Please choose a continent!',
        })}
      >
        <option value="">--Please choose a continent--</option>
        <option value="Eurasia">Eurasia</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Australia">Australia</option>
        <option value="Antarctica">Antarctica</option>
      </select>
      {props.errors.continent && (
        <span className="input__promptText">{props.errors.continent.message}</span>
      )}
    </label>
  );
}
