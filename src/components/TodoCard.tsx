import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function TodoCard({ title, description, finished, _id }) {
  const [done, setDone] = useState(finished);

  function toggleDone() {
    if (!finished) {
      fetch("/api/todo/finished", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ _id }),
      })
        .then((e) => {
          console.log("success");
          setDone(!done);
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <Card>
      <Card.Header
        className={`text-light ${done ? "bg-secondary" : "bg-primary"}`}
      ></Card.Header>
      <Card.Body>
        <Card.Title className="font-weight-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant={done ? "secondary" : "success"} onClick={toggleDone}>
          {done ? "Set not done" : "Done"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
