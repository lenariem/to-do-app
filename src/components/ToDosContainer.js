import React from 'react'
import ToDoItem from "./ToDoItem";

export default function ToDosContainer(props) {

    const todosItem = props.toDosProps.map(task => {
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
