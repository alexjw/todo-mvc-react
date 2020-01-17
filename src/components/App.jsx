import React from 'react';
import ToDoList from "./TodoList";
import TodoInputComponent from "./todoInput";

const App = () => {
    return <div>
        <h1>A React Application</h1>
        < ToDoList />
        < TodoInputComponent />
    </div>
};

export default App;