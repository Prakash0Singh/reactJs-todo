import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (<>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <buttton className="btn btn-sm btn-danger my-2" onClick={()=>{onDelete(todo)}}>Delete</buttton>
      <hr/>
    </div>
    </>
  )
}
