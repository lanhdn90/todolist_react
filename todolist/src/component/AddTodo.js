import React from "react";

class AddTodo extends React.Component {
    state={
        title:""
    };

    onInputChange = e =>{
        this.setState({
            title: e.target.value
        });
    };

    addTodoLv2 = e =>{
        e.preventDefault();
        this.props.addTodoLv1(this.state.title);
        this.setState({
            title: ""
        });
    };
    render() {
        return (
            <form className="form-container" onSubmit={this.addTodoLv2}>
                <input 
                type="text" 
                placeholder="Add Todo..." 
                className="input-text" 
                value={this.state.title}
                onChange={this.onInputChange}
                />
                <input type="submit" value="Submit" className="input-submit" />
            </form>

        );
    }
}

export default AddTodo;