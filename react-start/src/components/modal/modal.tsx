import './modal.css';

interface ModalProps {
  children: React.ReactNode;
  onExit: () => void;
}

export default function Modal({ children, onExit }: ModalProps) {
  return (
    <>
      <div className="modal__backdrop" onClick={onExit} />

      <div className="modal__windows">
        <div className="modal__close" onClick={onExit} />
        {children}
      </div>
    </>
  );
}
