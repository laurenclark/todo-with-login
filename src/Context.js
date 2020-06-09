import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
    const [allTodos, setTodos] = useState([
        { id: 0, text: 'Eat breakfast', date: new Date(), complete: true },
        { id: 1, text: 'Do laundry', date: new Date(), complete: false },
        { id: 2, text: 'Finish project', date: new Date(), complete: false }
    ]);

    function addTodo(newItem) {
        setTodos((prevItems) => [...prevItems, newItem]);
    }

    function removeTodo(id) {
        setTodos((prevItems) => prevItems.filter((item) => item.id !== id));
    }

    return (
        <Context.Provider value={{ allTodos, addTodo, removeTodo }}>
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };
