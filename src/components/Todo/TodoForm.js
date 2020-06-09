import React, { useState } from 'react';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import Button from '../UI/Button';

function TodoForm() {
    const [todo, setTodo] = useState({ item: '', date: new Date() });

    function handleChange(e) {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Wash dishes..."
                name="item"
                value={todo.item}
                onChange={handleChange}
            />
            <span className="datepicker--icon">
                <DatePicker
                    date={todo.date}
                    onDateChange={(date) => setTodo({ ...todo, date: date })}
                    format="dd/MM/yyyy"
                    name="date"
                    value={todo.date}
                    locale={enGB}>
                    {({ inputProps, focused }) => (
                        <input
                            className={'input' + (focused ? ' -focused' : '')}
                            {...inputProps}
                        />
                    )}
                </DatePicker>
            </span>
            <Button
                size="large"
                bgColor="var(--action)"
                color="var(--primary)"
                hollow={false}>
                Add Todo
            </Button>
        </form>
    );
}

export default TodoForm;
