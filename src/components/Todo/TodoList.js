/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { Context } from '../../Context';
import TodoListStyle from './styles/TodoList';
import TodoItem from './TodoItem';

function TodoList() {
    const { allTodos } = useContext(Context);
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
