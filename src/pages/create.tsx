import Layout from "@/components/layouts/Layout";
import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/todo/create", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ title, description }),
    })
      .then((res) => setSuccess(true))
      .catch((err) => setSuccess(false));
  }

  function renderAlert() {
    if (success !== null) {
      if (success === true) {
        return (
          <Alert variant="success" dismissible onClose={() => setSuccess(null)}>
            Successfully added the data
          </Alert>
        );
      } else {
        return (
          <Alert variant="danger" dismissible onClose={() => setSuccess(null)}>
            Sorry there's something wrong processing your request
          </Alert>
        );
      }
    }
    return "";
  }

  return (
    <Layout>
      <Container>
        <h1 className="font-weight-bold mb-3">Create a Todo</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Control
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Text className="text-muted">
              Type a meaningful title.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formText">
            <Form.Control
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
          {renderAlert()}
        </Form>
      </Container>
    </Layout>
  );
}

export default CreateTodo;
