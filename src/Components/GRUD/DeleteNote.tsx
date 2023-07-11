import axios from "axios";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export function DeleteNote() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .delete("https://localhost:5001/Notes", {
        data: { id: params.id },
      })
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
    navigate("/");
  }, []);

  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
