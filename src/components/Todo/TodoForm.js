import React from 'react';

function TodoForm() {
    return (
        <form>
            <input type="text" placeholder="Wash dishes..." />
            <input type="date" />
            <button>Add Todo</button>
        </form>
    );
}

export default TodoForm;
