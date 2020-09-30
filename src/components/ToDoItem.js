import React from "react";

export default function ToDoItem(props) {
    //another way if not use arrow function
    /* const changeStatus = () => {
            props.updateItemProps(props.taskProps.id)
        }
        <button className="btn" onClick={changeStatus}>&#10004;</button> */

    return (
        <div className="todo-item">
            <p>{props.taskProps.text}</p>
            <div className="action">
                {/* arrow because we cannot call function directly, will call it all time */}
                <button
                    className="btn"
                    onClick={() => props.updateItemProps(props.taskProps.id)}
                >&#10004;</button>
                <button
                    className="btn"
                    onClick={() => props.deleteItemProps(props.taskProps.id)}
                >&#128465;</button>
            </div>
        </div>
    );
}
