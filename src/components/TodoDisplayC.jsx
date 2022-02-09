import React from "react";

export default class TodoDisplayC extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { todo } = this.props;
        return (
            <div className={`todo ${todo.completed ? "complete " : "incomplete "}`}>
                <h3>{todo.user}</h3>
                <h4>{todo.title}</h4>
            </div>
        );
    }
}
