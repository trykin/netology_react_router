import axios from "axios";
import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function AddNote() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [comment, setComment] = useState<string>("");
  const buttonDisable: boolean =
    comment === null || comment === "" ? true : false;

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button
            variant="primary"
            disabled={buttonDisable}
            onClick={() => {
              const json = JSON.stringify({ content: comment });
              axios
                .post("https://localhost:5001/Notes", json, {
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                .then((p) => console.log(p.data))
                .catch((e) => console.log(e));
              handleClose();
            }}
          >
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
