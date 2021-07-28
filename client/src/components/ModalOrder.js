import { Modal } from "react-bootstrap";
import Order from "./form/AddOrder";
const ModalOrder = (props) => {
  const { handleClose,handleOrder, show } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
      <Order handleOrder={handleOrder}  />
      </Modal.Body>
    </Modal>
  );
};  

export default ModalOrder;
