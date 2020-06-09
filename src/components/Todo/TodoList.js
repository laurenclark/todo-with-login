/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from '@emotion/core';
import TodoItem from './TodoItem';
import TodoListStyle from './styles/TodoList';
import { Context } from '../../Context';

function TodoList() {
    const { allTodos, sortTodos } = useContext(Context);

    const sortedTodos = sortTodos(allTodos);

    return (
        <ul css={TodoListStyle}>
            {allTodos &&
                sortedTodos &&
                sortedTodos.map((entry) => (
                    <TodoItem
                        key={entry.id}
                        entryId={entry.id}
                        entryText={entry.text}
                        entryDate={entry.date}
                        entryComplete={entry.complete}
                    />
                ))}
            {allTodos.length === 0 && <h2>Nothing To Do 🎉</h2>}
        </ul>
    );
}

export default TodoList;
