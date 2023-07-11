import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export interface INote {
  id: string;
  content: string;
}

export function Home() {
  const [notes, setNotes] = useState<INote[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://localhost:5001/Notes")
      .then((p) => setNotes(p.data as INote[]))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Button
        variant="success"
        className="mx-3 my-3"
        onClick={() =>navigate(`/Add/`)}
      >
        Добавить
      </Button>
      {notes.map((item: INote) => (
        <Card key={item.id} style={{ width: "40rem" }}>
          <Card.Body>
            <Card.Title>{item.id}</Card.Title>
            <Card.Text>{item.content}</Card.Text>
            <Button
              className="mx-2 my-2"
              variant="primary"
              onClick={() => {
                navigate(`/Change/${item.id}`);
              }}
            >
              Изменить
            </Button>
            <Button
              className="mx-2 my-2"
              variant="primary"
              onClick={() => {
                navigate(`/Delete/${item.id}`);
              }}
            >
              Удалить
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
