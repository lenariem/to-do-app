import React from 'react'

export default function ToDoItem(props) {
    return (
        <div className="todo-item">
            <p>{props.taskProps.text}</p>
            <div className="action">
                <button className="btn">&#10004;</button>
            </div>
        </div>
    )
}
