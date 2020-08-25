import React from 'react'

export default function ToDonesContainer() {

    const todones = [
        {text: "create a website", done: true},
        {text: "read a book", done: true},
        {text: "make a call", done: true},
        {text: "buy a lap top", done: true},
    ]

    const toDonesItems = todones.map(task => {
        return (
            <div className="todones-item">
                <p>{task.text}</p>
                <div className="action">
                    <button className="btn">&#8635;</button>
                </div>
            </div>
        );
    })
    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {toDonesItems}
        </div>
    )
}
