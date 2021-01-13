import Head from "next/head";
import connectToDB from "@util/mongodb";
import Layout from "@/components/layouts/Layout";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { v4 } from "uuid";
import TodoCard from "@/components/TodoCard";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todo")
      .then((response) => response.json())
      .then((data) => {
        return setTodos(data);
      });
  }, []);

  return (
    <Layout>
      <Container>
        <h1 className="text-center font-weight-bold mb-5">Todo List</h1>
        <Row>
          {todos.map(({ title, description, finished, _id }) => (
            <Col key={v4()} lg={4} md={6}>
              <TodoCard
                title={title}
                finished={finished}
                description={description}
                _id={_id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
