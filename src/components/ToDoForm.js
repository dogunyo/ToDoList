import React, { useState } from "react";

export const ToDoForm = ({ addTodo }) => { // Destructure addTodo from props
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    };

    return (
        <form className='ToDoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value}
                placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
};