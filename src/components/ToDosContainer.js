import React from 'react'

export default function ToDosContainer() {

    const todos = [
        {text:"first task", done: false},
        {text:"second task", done: false},
        {text:"third task", done: false},
        {text:"fourth task", done: false}
    ]

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
                {todos.map(item => {
                    return (
                        <div className="todo-item">
                            <p>{item.text}</p>
                            <div className="action">
                                <button className="btn">&#10004;</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
