import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import Button from '../UI/Button';
import { Context } from '../../Context';

function TodoForm() {
    const [todo, setTodo] = useState({
        id: uuidv4(),
        text: '',
        date: new Date(),
        complete: false
    });
    const { addTodo } = useContext(Context);
    function handleSubmit() {
        if (todo.text) {
            setTodo({
                ...todo,
                id: uuidv4()
            });
            addTodo(todo);
        }
    }

    function handleChange(e) {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                placeholder="Wash dishes..."
                name="text"
                value={todo.text}
                onChange={handleChange}
                required
            />
            <span className="datepicker--icon">
                <DatePicker
                    date={todo.date}
                    onDateChange={(date) =>
                        setTodo({
                            ...todo,
                            date: date
                        })
                    }
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
                submit={true}
                bgColor="var(--action)"
                color="var(--primary)"
                hollow={false}
                handler={handleSubmit}>
                Add Todo
            </Button>
        </form>
    );
}

export default TodoForm;
