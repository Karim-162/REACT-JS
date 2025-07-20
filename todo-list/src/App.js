import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Alert from 'react-bootstrap/Alert';
import Header from "./MyComponents/header";
import Footer from "./MyComponents/footer";
import Todos from "./MyComponents/todos";
import Addtodo from "./MyComponents/Addtodo";
import React, { useState } from 'react';


function App() {
  const onDelete=(todo)=>{
    console.log("i am on delete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title,desc)=>{
    console.log("i am adding this todo",title,desc);
    let sno=todos[todos.length-1].sno+1;
    const myTodo={
      sno: sno,
      title: title,
      description: desc
    }
    setTodos([...todos,myTodo]);

    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "go to the market",
      description: "you need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "go to the mall",
      description: "you need to go to the market to get this job done"
    },
    {
      sno: 3,
      title: "go to the gym",
      description: "you need to go to the market to get this job done"
    }
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <Addtodo addTodo={addTodo}/> {/*check line 20*/}
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
