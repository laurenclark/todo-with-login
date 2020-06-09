import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function Todos() {
    return (
        <div className="container">
            <h1>Todo List</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default Todos;
