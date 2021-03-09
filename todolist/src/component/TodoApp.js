import React from 'react';
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from './AddTodo';
// Để tiến hành unique ID ta import UUID và chọn vesion
import {v4 as uuid} from "uuid";
import axios from 'axios';
import Footer from "../store/containers/Footer";


class TodoApp extends React.Component{

    state = {
        todos:[]
    }

    componentDidMount(){
        const config = {
            params: { _limit: 5}
        }
        axios.get("https://jsonplaceholder.typicode.com/todos",config).then(response =>this.setState({todos: response.data}));
    };

    handleCheckboxChange = id =>{
        // dùng hàm setState để update dữ liệu trong state
        this.setState({
            // thay đổi state todos
            todos: this.state.todos.map(item =>{
                if(item.id === id){
                    item.completed = !item.completed;
                }
                return item;
            })
        });
    };

    deleteTodo = id =>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response =>this.setState({
            todos: [
                ...this.state.todos.filter(item =>{
                    return item.id !== id;
                })
            ]
        }));
        
    };

    addTodo = title =>{
        const newTodo = {
            title: title,
            completed: false
        };
        axios.post("https://jsonplaceholder.typicode.com/todos",newTodo)
        .then(response => this.setState({todos:[...this.state.todos,newTodo]}));

    };
    render(){
        return(
            <div className="container">
                <Header/>
                {/* truyền dữ liệu từ component cha xuống component con bằng props */}
                <AddTodo addTodoLv1={this.addTodo}/>
                <Todos 
                    list={this.state.todos} 
                    handleChange={this.handleCheckboxChange}
                    deleteTodo= {this.deleteTodo}
                />
                <Footer/>
            </div>
        );
    }
}

export default TodoApp;

