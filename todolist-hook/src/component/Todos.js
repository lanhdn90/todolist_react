import React, { useState }  from 'react';
import TodoItem from "./TodoItem";

function Todos(props) {
    return(
        <ul>
            {props.list.map(item =>(
                <TodoItem 
                    key={item.id}
                    todo={item}
                    handleChangeLv2 = {props.handleChange}
                    deleteTodoLv2= {props.deleteTodo}
                />
            ))}
        </ul>
    );
}

export default Todos;