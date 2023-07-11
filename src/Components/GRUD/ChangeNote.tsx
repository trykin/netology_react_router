import axios from "axios";
import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { INote } from "./Home";

export function ChangeNote() {
  const params = useParams();
  const id:string = params.id as string;

  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [comment, setComment] = useState<string>("");
  const buttonDisable: boolean =
    comment === null || comment === "" ? true : false;

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(`https://localhost:5001/Notes/${id}`)
      .then((p) => setComment((p.data as INote).content))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{id}</Modal.Title>
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
            disabled={ buttonDisable}
            onClick={() => {
              const json = JSON.stringify({ id: id, content: comment });
              axios
                .put("https://localhost:5001/Notes", json, {
                  headers: { "Content-Type": "application/json" },
                })
                .then((p) => console.log(p.data))
                .catch((e) => console.log(e));
              handleClose();
            }}
          >
            Изменить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
