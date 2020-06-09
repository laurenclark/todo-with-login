/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from '@emotion/core';
import TodoItem from './TodoItem';
import TodoListStyle from './styles/TodoList';
import { Context } from '../../Context';

function TodoList() {
    const { allTodos } = useContext(Context);
    console.log(allTodos);
    return (
        <ul css={TodoListStyle}>
            {allTodos.map((entry, index) => (
                <TodoItem
                    // Note - map index isn't ideal here, normally this would be a fixed value retrieved
                    // from API/Database and would be a unique identifier. I could use 'uuid' from NPM
                    // for this, but I won't because in a real scenario this would be from an API!
                    key={index}
                    entryText={entry.text}
                    entryDate={entry.date}
                />
            ))}
        </ul>
    );
}

export default TodoList;
