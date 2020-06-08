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
        right: '1vw'
    };

    const formStyle = {
        marginBottom: '1rem'
    };

    console.log(theDate.toLocaleDateString('en-GB', options));

    return (
        <form style={formStyle}>
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
