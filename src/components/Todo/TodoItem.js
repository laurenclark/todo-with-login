/** @jsx jsx */
import React, { useState, useEffect, useContext } from 'react';
import { jsx } from '@emotion/core';
import TodoItemStyle from './styles/TodoItem';
import Button from '../UI/Button';
import { Context } from '../../Context';
import { format } from 'date-fns';

function TodoItem({ entryDate, entryText, entryId, entryComplete }) {
    const { updateTodo, removeTodo } = useContext(Context);
    const formatDate = format(new Date(entryDate), 'dd/MM/yyyy');
    const [entry, setEntry] = useState({
        id: entryId,
        text: entryText,
        date: formatDate,
        complete: entryComplete
    });

    useEffect(() => {
        updateTodo(entry);
    }, [entry]);

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
