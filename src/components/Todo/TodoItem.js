/** @jsx jsx */
import React, { useState, useContext } from 'react';
import { jsx } from '@emotion/core';
import TodoItemStyle from './styles/TodoItem';
import Button from '../UI/Button';
import { Context } from '../../Context';

function TodoItem({ entryDate, entryText, entryId, entryComplete }) {
    const [checked, setChecked] = useState(entryComplete);
    const [text, setText] = useState(entryText);
    const [date, setDate] = useState(entryDate);
    const { removeTodo } = useContext(Context);

    function handleInput(e) {
        const { value } = e.target;
        setText(value);
    }

    function handleDate(e) {
        const { value } = e.target;
        setDate(value);
    }

    function toggleChecked() {
        setChecked((prev) => !prev);
    }

    return (
        <li id={entryId} css={TodoItemStyle}>
            <div onClick={toggleChecked} className="form-control custom-inputs">
                <label>
                    <input
                        checked={checked}
                        onChange={toggleChecked}
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

            <Button
                bgColor="var(--danger)"
                hollow={true}
                handler={() => removeTodo(entryId)}>
                <strong>Delete</strong>
            </Button>
        </li>
    );
}

export default TodoItem;
