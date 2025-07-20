import React from 'react'
import Todoitem from "./Todoitem";
const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos List</h3>
      <div className='text-center'>
      {props.todos.length===0? "No Todos to display" :props.todos.map((todo)=>{
         return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })}
      </div>
    </div>
  )
}

export default Todos
