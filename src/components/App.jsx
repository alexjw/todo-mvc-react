import React from 'react';
import ToDoList from "./TodoList";
import TodoInputComponent from "./todoInput";
import ShowDoneToggle from "./ShowDoneToggle";

const App = () => {
    return <div>
        <h1>A React Application</h1>
        < ToDoList />
        < TodoInputComponent />
        < ShowDoneToggle />
    </div>
};

export default App;