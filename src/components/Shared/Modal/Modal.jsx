import React from "react";
import { Modal } from "react-bootstrap";

function ModalComponent({ show, onRequestHide, children }) {
  return (
    <Modal
      size="lg"
      centered
      fullscreen="md-down"
      className="isx-modal-window"
      dialogClassName="isx-modal"
      show={show}
      onHide={onRequestHide}>
      {children}
    </Modal>
  );
}

export default ModalComponent;
