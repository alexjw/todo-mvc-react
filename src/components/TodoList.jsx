import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames'

const ToDoList = ( { todos, showDone } ) => {
    return <ul>
        {todos.map(todo => {
            return <li key={todo.id}>{todo.text}</li>
        })}
        </ul>
};

const mapStateToProps = (state) => {
    return { todos: state.todos, showDone: state.showDone }
}

export default connect(mapStateToProps) (ToDoList);