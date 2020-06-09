/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import TodoItemStyle from './styles/TodoItem';
import Button from '../UI/Button';

function TodoItem({ entryDate, deleteTodo, entryText }) {
    const [checked, setChecked] = useState(false);
    const [text, setText] = useState(entryText);
    const [date, setDate] = useState(entryDate);

    const handleInput = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const handleDate = (e) => {
        const { value } = e.target;
        setDate(value);
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
            <input
                className="date"
                onChange={handleDate}
                type="text"
                value={date}
            />

            <Button bgColor="var(--danger)" hollow={true} onClick={deleteTodo}>
                <strong>Delete</strong>
            </Button>
        </li>
    );
}

export default TodoItem;
