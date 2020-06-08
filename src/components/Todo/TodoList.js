/** @jsx jsx */
import { jsx } from '@emotion/core';
import TodoItem from './TodoItem';
import TodoListStyle from './styles/TodoList';

function TodoList() {
    return (
        <ul css={TodoListStyle}>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    );
}

export default TodoList;
