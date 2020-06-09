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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac ante eleifend, faucibus purus a, venenatis lorem.
                Nunc accumsan urna ligula, nec sollicitudin ipsum consectetur a.
            </p>
            <p className="date">12/09/2020</p>
            <Button bgColor="var(--danger)" hollow={true}>
                <strong>Delete</strong>
            </Button>
        </li>
    );
}

export default TodoItem;
