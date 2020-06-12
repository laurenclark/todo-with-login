import React from 'react';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

function CustomDatepicker({ date, handler, disabledState }) {
    return (
        <span className="datepicker--icon ">
            <DatePicker
                date={date}
                onDateChange={(date) => handler(date)}
                format="dd/MM/yyyy"
                name="date"
                value={date}
                locale={enGB}>
                {({ inputProps, focused }) => (
                    <input
                        disabled={disabledState}
                        className={'input' + (focused ? ' -focused' : '')}
                        {...inputProps}
                    />
                )}
            </DatePicker>
        </span>
    );
}

export default CustomDatepicker;
