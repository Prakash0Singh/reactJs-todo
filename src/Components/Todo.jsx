import React from "react";
import { TodoItem } from "./TodoItem";

function Todo(props) {
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto",
  }
  return (
    <>
      <div className="container" style={myStyle}>
        <h3 className="my-4">Todos List</h3>
        {props.todos.length===0?"Todo list is empty !!!!!":
        props.todos.map((todo) => {
          return(<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
        })
        }
      </div>
    </>
  );
}

export default Todo;
 