/** @jsx jsx */
import { jsx } from '@emotion/core';
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Context } from '../../Context';
import TodoListStyle from './styles/TodoList';
import TodoItem from './TodoItem';

function TodoList() {
    const { allTodos, sortTodos } = useContext(Context);

    const sortedTodos = sortTodos(allTodos);

    return (
        <ul css={TodoListStyle}>
            {allTodos.map(({ id, text, date, complete }) => (
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
