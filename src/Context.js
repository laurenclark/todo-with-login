import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
    const [username, setUsername] = useState('Lauren');
    const [allTodos, setTodos] = useState([
        { id: 1, text: 'Eat breakfast', date: new Date(), complete: false },
        { id: 2, text: 'Do laundry', date: new Date(), complete: false },
        { id: 3, text: 'Finish project', date: new Date(), complete: true }
    ]);

    useEffect(() => {
        setTodos(sortTodos(allTodos));
    }, [allTodos]);

    function sortTodos(todos) {
        return todos
            .sort(function (a, b) {
                if (a.date > b.date) return -1;
                if (a.date < b.date) return 1;
            })
            .sort(function (a, b) {
                if (a.complete > b.complete) return -1;
                if (a.complete < b.complete) return 1;
            });
    }

    function addTodo(newItem) {
        setTodos((prevItems) => [...prevItems, newItem]);
    }

    function updateTodo(entry) {
        const itemPosition = allTodos
            .map(function (x) {
                return x.id;
            })
            .indexOf(entry.id);

        setTodos((prevItems) => [
            ...prevItems.slice(0, itemPosition),
            entry,
            ...prevItems.slice(itemPosition + 1)
        ]);
    }

    function removeTodo(id) {
        setTodos((prevItems) => prevItems.filter((item) => item.id !== id));
    }

    return (
        <Context.Provider
            value={{
                username,
                allTodos,
                addTodo,
                removeTodo,
                sortTodos,
                setUsername,
                updateTodo
            }}>
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };
