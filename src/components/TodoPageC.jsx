import React from "react";
import TodoDisplayC from "./TodoDisplayC";

export default class TodoPageC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            user: "",
            todos: [
                { id: 1, title: "Do work", user: "Mike", completed: true },
                { id: 2, title: "Eat Lunch", user: "Jacob", completed: false },
                { id: 3, title: "Solve Crimes", user: "Hortense", completed: true },
                { id: 4, title: "Spy on enemies", user: "Xavier", completed: true },
                { id: 5, title: "Wash the dog", user: "Oslo", completed: false },
            ],
            filterText: "",
            sortText: "",
        };
    }

    render() {
        return (
            <div>
                <label htmlFor="title">Title</label>
                {/*! When input changes, update the title variable*/}
                <input
                    onChange={(e) => {
                        this.setState({ title: e.target.value });
                    }}
                    value={this.state.title}
                    id="title"
                    type="text"
                />
                Title: {this.state.title}
                <br />
                <label htmlFor="user">User</label>
                <input
                    id="user"
                    type="text"
                    onChange={(e) => {
                        this.setState({ user: e.target.value });
                    }}
                    value={this.state.user}
                />
                <button
                    onClick={() => {
                        let newID = Math.floor(Math.random() * 1000) + 1;
                        let newTodo = { id: newID, title: this.state.title, user: this.state.user, completed: false }
                        this.setState({ title: "", user: "", todos: [...this.state.todos, newTodo], })
                    }}
                >
                    Add Todo
                </button>
                <br />
                <label htmlFor="filter">Filter</label>
                <input
                    id="filter"
                    tyle="text"
                    onChange={(e) => {
                        this.setState({ filterText: e.target.value });
                    }}
                    value={this.state.filterText}
                />
                {this.state.todos.map((t) => (
                    <TodoDisplayC todo={t} key={t.id} />
                ))}
            </div>
        );
    }
}
