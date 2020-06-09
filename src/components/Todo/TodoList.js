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
                sortedTodos.map(({ id, text, date, complete }) => (
                    <TodoItem
                        key={id}
                        entryId={id}
                        entryText={text}
                        entryDate={date}
                        entryComplete={complete}
                    />
                ))}
            {allTodos.length === 0 && <h2>Nothing To Do 🎉</h2>}
        </ul>
    );
}

export default TodoList;
