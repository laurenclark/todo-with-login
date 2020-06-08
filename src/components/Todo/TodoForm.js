import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Button from '../UI/Button';

function TodoForm() {
    const [theDate, setTheDate] = useState(new Date());
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };

    const buttonStyles = {
        position: 'absolute',
        right: '89px'
    };

    console.log(theDate.toLocaleDateString('en-GB', options));

    return (
        <form>
            <input type="text" placeholder="Wash dishes..." />
            <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={theDate}
                onChange={(date) => setTheDate(date)}
            />
            <Button
                uniqueStyle={buttonStyles}
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
