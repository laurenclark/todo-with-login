/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import TodoItem from './TodoItem';
import TodoListStyle from './styles/TodoList';

function TodoList() {
    return (
        <ul css={TodoListStyle}>
            <TodoItem entryText="Some entry" entryDate="12/09/2020" />
            <TodoItem entryText="Some entry" entryDate="12/09/2020" />
            <TodoItem entryText="Some entry" entryDate="12/09/2020" />
        </ul>
    );
}

export default TodoList;
