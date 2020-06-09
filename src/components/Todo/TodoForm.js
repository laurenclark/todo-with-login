import React, { useState } from 'react';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import Button from '../UI/Button';

function TodoForm() {
    const [date, setDate] = useState(new Date());
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };

    console.log(date.toLocaleDateString('en-GB', options));

    return (
        <form>
            <input type="text" placeholder="Wash dishes..." />
            <span className="datepicker--icon">
                <DatePicker
                    date={date}
                    onDateChange={setDate}
                    format="dd/MM/yyyy"
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
