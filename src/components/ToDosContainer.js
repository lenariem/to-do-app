import React from 'react'
import ToDoItem from "./ToDoItem";

export default class ToDosContainer extends React.Component{

    //possible to use without constructor
    
    constructor(props) {
        super(props);
        this.state = {
            InputText: ""
        }
    }

    render() {
        const todosItem = this.props.toDosProps.map(task => {
            return (
                <ToDoItem taskProps={task}/>
            );
    }) 
    
    return (
        <div className="todos-container">
            <form className="todo-form">
                <label className="input-item">
                    <input 
                    type="text"
                    name="todo"
                    onChange={e => this.setState({InputText: e.target.value})}
                    />
                </label>
                <input 
                    className="btn"
                    type="submit"
                    value="ADD"
                />
            </form>
            <div className="todos">
                <h3>TO DO</h3>
                {todosItem}
            </div>
        </div>
        )
    }
}
