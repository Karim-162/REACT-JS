import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Addtodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();//etar maddhome page reload hobe na
        if(!title||!desc){
            alert("title or description can't be Blank!!!")
        }
        addTodo(title,desc);
    }


  return (
    <div className="container my-3">
        <h3>Add your Todo</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter Todo" />
          <Form.Text className="text-muted">
            We'll never share your Todo with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder="Enter Todo Description" />
          
        </Form.Group>

        
        <Button variant="primary" type="submit" className="btn btn-sm btn-success">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Addtodo;
