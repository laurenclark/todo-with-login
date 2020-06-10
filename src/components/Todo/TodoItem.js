/** @jsx jsx */
import React, { useState, useEffect, useContext } from 'react';
import { jsx } from '@emotion/core';
import TodoItemStyle from './styles/TodoItem';
import Button from '../UI/Button';
import { Context } from '../../Context';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

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

            <textarea value={entry.text} name="text" onChange={handleChange} />
            <span className="datepicker--icon">
                <DatePicker
                    date={entry.date}
                    onDateChange={(date) =>
                        setEntry({
                            ...entry,
                            date: date
                        })
                    }
                    format="dd/MM/yyyy"
                    name="date"
                    value={entry.date}
                    locale={enGB}>
                    {({ inputProps, focused }) => (
                        <input
                            className={
                                'date input' + (focused ? ' -focused' : '')
                            }
                            {...inputProps}
                        />
                    )}
                </DatePicker>
            </span>
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
