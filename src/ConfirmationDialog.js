import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ConfirmationDialog(props) {
  const { show } = props;
  return (
    <Modal
      show={show}
      onHide={() => {}}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Your data was successfully submited!</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onYes}>OK</Button>
      </Modal.Footer>
    </Modal>
  );
}
