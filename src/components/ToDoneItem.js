import React from 'react'

export default function ToDoneItem(props) {
    return (
        <div className="todones-item">
            <p>{props.taskProps.text}</p>
            <div className="action">
                <button className="btn">&#8635;</button>
            </div>
        </div>
    )
}
