import React from "react";

export default function ToDoneItem(props) {
    return (
        <div className="todones-item">
            <p>{props.taskProps.text}</p>
            <div className="action">
                <button
                    className="btn"
                    onClick={() => props.updateItemProps(props.taskProps.id)}
                >&#8635;</button>
                <button
                    className="btn"
                    onClick={() => props.deleteItemProps(props.taskProps.id)}
                >&#128465;</button>
            </div>
        </div>
    );
}
