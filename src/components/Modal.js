import { IoMdCloseCircleOutline } from "react-icons/io";
import "../stilos/Modal.css";

const Modalx = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <IoMdCloseCircleOutline
          alt="cerrar"
          className="modal-closex"
          onClick={closeModal}
        />
        {children}
      </div>
    </article>
  );
};
export default Modalx;
