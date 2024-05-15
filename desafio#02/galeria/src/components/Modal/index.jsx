import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";

export default function Modal({ handleOpenModal, chosenPhoto }) {
  return (
    <div className="modal" onClick={() => handleOpenModal(false)}>
      <MdClose
        className="modal__button-close"
        onClick={() => handleOpenModal(false)}
      />
      <img src={chosenPhoto.img} alt={chosenPhoto.alt} />
    </div>
  );
}

Modal.propTypes = {
  handleOpenModal: PropTypes.func,
  chosenPhoto: PropTypes.object,
};
