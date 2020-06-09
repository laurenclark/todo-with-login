/** @jsx jsx */
import React, { useState, useContext } from 'react';
import { jsx } from '@emotion/core';
import TodoItemStyle from './styles/TodoItem';
import Button from '../UI/Button';
import { Context } from '../../Context';

function TodoItem({ entryDate, entryText, entryId, entryComplete }) {
    const { addTodo, removeTodo } = useContext(Context);
    const [entry, setEntry] = useState({
        text: entryText,
        date: entryDate,
        complete: entryComplete
    });

    function handleChange(e) {
        setEntry({
            ...entry,
            [e.target.name]: e.target.value
        });
    }

    function toggleComplete() {
        setEntry({ ...entry, complete: !entry.complete });
    }

    return (
        <li id={entryId} css={TodoItemStyle}>
            <div className="form-control custom-inputs">
                <label>
                    <input
                        checked={entry.complete}
                        onChange={toggleComplete}
                        type="checkbox"
                        name="complete"
                    />
                    <span className="checkmark"></span>
                </label>
            </div>

            <textarea value={entry.text} name="text" onChange={handleChange} />
            <input
                className="date"
                onChange={handleChange}
                type="text"
                name="date"
                value={entry.date}
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
