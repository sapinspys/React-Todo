import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <form className='form-container' onSubmit={props.onSubmit} autoComplete='off'>
            <input type="text"
                name="task"
                value={props.task}
                onChange={props.onChange}
                placeholder='...Todo'/>
            <button type="submit">Add Todo</button>
            <button type="button" onClick={props.clearFunction}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;