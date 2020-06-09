/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import TodoItemStyle from './styles/TodoItem';
import Button from '../UI/Button';

function TodoItem() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <li css={TodoItemStyle}>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <p>Todo Item</p>
            <Button bgColor="var(--danger)" hollow={true}>
                Delete
            </Button>
        </li>
    );
}

export default TodoItem;
