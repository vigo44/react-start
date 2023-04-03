import { UseFormRegister } from 'react-hook-form';
import './inputs.css';
import { FormInputs } from '../form/form';

type Props = {
  register: UseFormRegister<FormInputs>;
};

export default function SendCheckInput(props: Props) {
  return (
    <label>
      <input className="input__send-check" type="checkbox" {...props.register('send')} />
    </label>
  );
}
