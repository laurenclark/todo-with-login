/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from '@emotion/core';
import TodoItem from './TodoItem';
import TodoListStyle from './styles/TodoList';
import { Context } from '../../Context';
import { PropTypes } from 'prop-types';

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

TodoList.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    complete: PropTypes.bool.isRequired
};

export default TodoList;
