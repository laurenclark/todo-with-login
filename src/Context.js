import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
    const [allTodos, setTodos] = useState([
        { id: 0, text: 'Eat breakfast', date: '10/07/2020', complete: true },
        { id: 1, text: 'Do laundry', date: '10/07/2020', complete: false },
        { id: 2, text: 'Finish project', date: '11/07/2020', complete: false }
    ]);
    console.log(allTodos);
    function addTodo(newItem) {
        setTodos((prevItems) => [...prevItems, newItem]);
    }

    function removeTodo(id) {
        console.log(id);
        setTodos((prevItems) => prevItems.filter((item) => item.id !== id));
    }

    return (
        <Context.Provider value={{ allTodos, addTodo, removeTodo }}>
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };
