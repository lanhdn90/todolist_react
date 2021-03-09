import React from "react";

class TodoItem extends React.Component{
    render(){
        // Để Destructoring (rút gon code) ta làm như sau
        const {completed , id, title} = this.props.todo;
        return(
            <li className="todo-item">
                {/* nhận dữ liệu từ component cha */}
                <input
                    type="checkbox"
                    // checked={this.props.todo.completed}
                    checked={completed}
                    onChange={()=>this.props.handleChangeLv2(id)}
                />
                <span className={this.props.todo.completed ? "completed" : null} >
                    {title}
                </span>
                <button className="btn-style" onClick={()=> this.props.deleteTodoLv2(id)}> X </button>
            </li>
        );
    }
}

export default TodoItem;