/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import TodoItemStyle from './styles/TodoItem';
import Button from '../UI/Button';

function TodoItem({ date, deleteTodo, entry }) {
    const [checked, setChecked] = useState(false);
    const [text, setText] = useState(entry);

    const handleInput = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <li css={TodoItemStyle}>
            <div className="form-control custom-inputs">
                <label>
                    <input
                        checked={checked}
                        onChange={handleChange}
                        type="checkbox"
                        value="complete"
                    />
                    <span className="checkmark"></span>
                </label>
            </div>

            <textarea value={text} onChange={handleInput} />

            <p className="date">{date}</p>

            <Button bgColor="var(--danger)" hollow={true} onClick={deleteTodo}>
                <strong>Delete</strong>
            </Button>
        </li>
    );
}

export default TodoItem;
