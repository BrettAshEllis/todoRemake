import React from "react";

export default function TodoDisplay(props) {
    return (
        <div
            className={`todo ${props.todo.completed ? "complete " : "incomplete "}`}
        >
            <h3>{props.todo.user}</h3>
            <h4>{props.todo.title}</h4>
        </div>
    );
}
