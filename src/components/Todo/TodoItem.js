/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context';
import Button from '../UI/Button';
import TodoItemStyle from './styles/TodoItem';
import CustomDatepicker from './CustomDatepicker';

function TodoItem({ entryDate, entryText, entryId, entryComplete }) {
    const { updateTodo, removeTodo } = useContext(Context);
    const [entry, setEntry] = useState({
        id: entryId,
        text: entryText,
        date: entryDate,
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

    function handleDate(date) {
        return setEntry({
            ...entry,
            date: date
        });
    }

    function toggleComplete() {
        setEntry({ ...entry, complete: !entry.complete });
    }

    return (
        <li
            id={entryId}
            css={TodoItemStyle}
            className={entry.complete ? 'completed' : ''}>
            <div className={`form-control custom-inputs`}>
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

            <textarea
                value={entry.text}
                name="text"
                onChange={handleChange}
                disabled={entry.complete ? 'disabled' : ''}
            />
            <CustomDatepicker date={entry.date} handler={handleDate} />
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
