import cl from './Modal.module.css';

const Modal = ({children,visible,setVisible}) => {

  const rootClases = [cl.Modal];

  if (visible) {
    rootClases.push(cl.active);
  }

  return (
    <div className={rootClases.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;