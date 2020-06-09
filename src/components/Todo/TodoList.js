/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from '@emotion/core';
import TodoItem from './TodoItem';
import TodoListStyle from './styles/TodoList';
import { Context } from '../../Context';

function TodoList() {
    const { allTodos } = useContext(Context);

    const mostRectentTodos = allTodos.sort((a, b) => b.date - a.date);

    return (
        <ul css={TodoListStyle}>
            {mostRectentTodos.map((entry) => (
                <TodoItem
                    key={entry.id}
                    entryId={entry.id}
                    entryText={entry.text}
                    entryDate={entry.date}
                    entryComplete={entry.complete}
                />
            ))}
        </ul>
    );
}

export default TodoList;
