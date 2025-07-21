import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Alert from "react-bootstrap/Alert";
import Header from "./MyComponents/header";
import Footer from "./MyComponents/footer";
import Todos from "./MyComponents/todos";
import Addtodo from "./MyComponents/Addtodo";
import React, { useState,useEffect } from "react";

function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(inittodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      description: desc,
    };
    setTodos([...todos, myTodo]);
  };

  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
