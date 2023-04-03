import './modal-window.css';

interface Props {
  isOpen: boolean;
  close: () => void;
}

export default function ModalWindow(props: Props) {
  return (
    <div className={`modal-windows ${props.isOpen ? '' : 'modal-windows_invisible'}`}>
      <div
        className={`modal-windows__shadow ${props.isOpen ? '' : 'modal-windows__shadow_invisible'}`}
      ></div>
      <div
        className={`modal-windows__content ${
          props.isOpen ? '' : 'modal-windows__content_invisible'
        }`}
      >
        <p className="modal-windows__text">User is saved!</p>
        <input type="button" value="OK" onClick={props.close} />
      </div>
    </div>
  );
}
