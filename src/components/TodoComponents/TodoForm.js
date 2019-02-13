import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <input type="text"
                name="task"
                value={props.task}
                onChange={props.onChange}
                placeholder='...Todo'/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;