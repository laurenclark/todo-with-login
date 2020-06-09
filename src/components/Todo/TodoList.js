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
            {allTodos.map((entry) => (
                <TodoItem
                    key={entry.id}
                    entryId={entry.id}
                    entryText={entry.text}
                    entryDate={entry.date}
                />
            ))}
        </ul>
    );
}

export default TodoList;
