import React from "react";
import TodoItem from "./TodoItem"

class Todos extends React.Component {
    render() {
        return (
            <ul>
                {this.props.list.map(item => (
                    // truyền dữ liệu cho component con
                    <TodoItem 
                        key={item.id} 
                        todo={item}
                        handleChangeLv2={this.props.handleChange}
                        deleteTodoLv2={this.props.deleteTodo}
                    />
                ))}
            </ul>
        );
    }
}
export default Todos;