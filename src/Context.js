import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
    const [allTodos, setTodos] = useState([
        { text: 'Eat breakfast', date: '10/07/2020', complete: true },
        { text: 'Do laundry', date: '10/07/2020', complete: false },
        { text: 'Finish project', date: '11/07/2020', complete: false }
    ]);

    function addTodo(newItem) {
        setTodos((prevItems) => [...prevItems, newItem]);
    }

    return (
        <Context.Provider value={{ allTodos, addTodo }}>
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };
