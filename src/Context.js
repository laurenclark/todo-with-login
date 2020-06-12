import React, { useState, useEffect } from 'react';
import { endOfYesterday } from 'date-fns';

const Context = React.createContext();

function ContextProvider({ children }) {
    const [username, setUsername] = useState('');
    const [allTodos, setTodos] = useState([
        { id: 1, text: 'Eat breakfast', date: new Date(), complete: false },
        { id: 2, text: 'Do laundry', date: new Date(), complete: false },
        { id: 3, text: 'Finish project', date: new Date(), complete: true },
        { id: 4, text: 'Make dinner', date: new Date(), complete: false }
    ]);

    useEffect(() => {
        setTodos(sortTodos(allTodos));
    }, [allTodos]);

    function sortTodos(todos) {
        return todos
            .sort(function sortByDateAsc(a, b) {
                if (a.date > b.date) return -1;
                if (a.date < b.date) return 1;
            })
            .sort(function sortByCompletedAsc(a, b) {
                if (a.complete > b.complete) return -1;
                if (a.complete < b.complete) return 1;
            });
    }

    function addTodo(entry) {
        setTodos((prevItems) => [...prevItems, entry]);
    }

    function updateTodo(entry) {
        const itemPosition = allTodos.map((item) => item.id).indexOf(entry.id);

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
