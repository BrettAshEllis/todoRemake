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
                Title:
                <br />
                <label htmlFor="user">User</label>
                <input
                    id="user"
                    type="text"
                    onChange={(e) => {
                        this.user = e.target.value;
                    }}
                />
                <button onClick={() => { }}>Add Todo</button>
                {todos.map((t) => (
                    <TodoDisplayC todo={t} key={t.id} />
                ))}
            </div>
        );
    }
}
