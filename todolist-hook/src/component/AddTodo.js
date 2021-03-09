import React, {useState} from 'react';

function AddTodo(props) {
    
    const [title, setTitle] = useState("");

    // const [state, setState] = useState({
    //     count: 0,
    //     name:'SonDuong'
    //     });
    const oninputChange = e =>{
        setTitle(e.target.value)
    };
    
    const addTodoLv2 = e =>{
        e.preventDefault();
        props.addTodo(title);
        setTitle("");
    }

    return(
        <form className="form-container" onSubmit={addTodoLv2}>
            <input 
                type="text" 
                className="input-text"
                placeholder="Add Todo ..."
                onChange={oninputChange}
                value={title}
            />
            <input type="submit" value="Submit"
                className="input-submit"
            />
        </form>
    );
}

export default AddTodo;