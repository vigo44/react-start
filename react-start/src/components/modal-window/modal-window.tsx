import React from 'react';
import './modal-window.css';

interface Props {
  isOpen: boolean;
  close: () => void;
}

export default class ModalWindow extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={`modal-windows ${this.props.isOpen ? '' : 'modal-windows_invisible'}`}>
        <div
          className={`modal-windows__shadow ${
            this.props.isOpen ? '' : 'modal-windows__shadow_invisible'
          }`}
        ></div>
        <div
          className={`modal-windows__content ${
            this.props.isOpen ? '' : 'modal-windows__content_invisible'
          }`}
        >
          <p className="modal-windows__text">User is saved!</p>
          <input type="button" value="OK" onClick={this.props.close} />
        </div>
      </div>
    );
  }
}
