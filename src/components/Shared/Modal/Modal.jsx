import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Children } from "react";
import { Modal } from "react-bootstrap";

function ModalComponent({
  show,
  onRequestHide,
  footer = false,
  title,
  children,
}) {
  return (
    <Modal
      size="lg"
      centered
      fullscreen="md-down"
      className="isx-modal-window"
      dialogClassName="isx-modal"
      show={show}
      onHide={onRequestHide}>
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <Modal.Title as="h5">{title}</Modal.Title>
        <button
          className="btn btn-sm text-primary d-md-none"
          onClick={onRequestHide}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {footer && <Modal.Footer></Modal.Footer>}
    </Modal>
  );
}

export default ModalComponent;
