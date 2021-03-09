import React, {useState, useEffect} from 'react';
import Header from "./layout/Header";
import Todos from './Todos';
import axios from 'axios';
import AddTodo from './AddTodo';
import Footer from './Footer';

function AppTodo() {
    const [state, setState] = useState({ 
        todos: []
    });

    useEffect(() => {
        const config = {
            params: {
            _limit: 5
            }
        }
        // tạo GET request để lấy danh sách todos
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
        .then(response => setState({ todos: response.data }));
        }, []);

    const addTodo = title =>{
        const todo = {
            title: title,
            completed: false
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", todo).then
            (response => { setState({
                todos: [...state.todos, response.data]
            })
        });
    };

    const deleteTodo = id =>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response =>setState({
            todos: [
                ...state.todos.filter(item =>{
                    return item.id !== id;
                })
            ]
        }));
    }

    const handleCheckboxChange = id =>{
        setState({
            todos: state.todos.map(item =>{
                if(item.id === id){
                    item.completed = !item.completed;
                }
                return item;
            })

        });
    };

    return(
        <div className="container">
            <Header/>
            <AddTodo addTodo={addTodo}/>
            <Todos list={state.todos}
                deleteTodo={deleteTodo}
                handleChange={handleCheckboxChange}
            />
            <Footer/>
        </div>
    );
}

export default AppTodo;