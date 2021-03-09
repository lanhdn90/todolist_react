import React, { useState } from "react";

function TodoItem(props) {
    const {completed , id, title} = props.todo;
    return(
        <li className="todo-item">
            <input type="checkbox" 
            onChange={()=> props.handleChangeLv2(id)}
            checked={completed}/>
            <span className={completed ? "completed" : null}>{title}</span>
            <button className="btn-style" onClick={()=> props.deleteTodoLv2(id)}> X </button>
        </li>
    );
}
export default TodoItem;