import React from "react";
import TodoDisplay from "./TodoDisplay";

function TodoPage() {
    let todos = [
        { id: 1, title: "Do work", user: "Mike", completed: true },
        { id: 2, title: "Eat Lunch", user: "Jacob", completed: false },
        { id: 3, title: "Solve Crimes", user: "Hortense", completed: false },
        { id: 4, title: "Spy on enemies", user: "Xavier", completed: true },
        { id: 5, title: "Wash the dog", user: "Oslo", completed: false },
    ];

    let title = "";
    let user = "";
    function clickHandler(e) {
        let newTodo = { title, user };
        console.log(newTodo);
    }
    return (
        <div onClick={() => { }}>
            <label htmlFor="title">Title</label>
            {/*! When input changes, update the title variable*/}
            <input
                onChange={(e) => {
                    title = e.target.value;
                }}
                value={title}
                id="title"
                type="text"
            />
            <label htmlFor="user">User</label>

            <input
                id="user"
                type="text"
                onChange={(e) => {
                    user = e.target.value;
                }}
            />
            <button onClick={clickHandler}>Add Todo</button>
            {todos.map((t) => (
                <TodoDisplay todo={t} key={t.id} />
            ))}
        </div>
    );
}

export default TodoPage;

// let el = document.getElementById("user-input");
