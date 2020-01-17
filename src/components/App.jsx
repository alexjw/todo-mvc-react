import React from 'react';
import ToDoList from "./TodoList";
import TodoInputComponent from "./todoInput";
import ShowDoneToggle from "./ShowDoneToggle";

const App = () => {
    return <div>
        <h1><img style= {{ width: "8%" }} src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="React Logo" /> to-do App</h1>
        < ToDoList />
        < TodoInputComponent />
        < ShowDoneToggle />
    </div>
};

export default App;