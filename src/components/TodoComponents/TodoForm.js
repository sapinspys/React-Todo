import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <div className='form-container'>
            <form onSubmit={props.onSubmit}>
                <input type="text"
                    name="task"
                    value={props.task}
                    onChange={props.onChange}
                    placeholder='...Todo'/>
                <button type="submit">Add Todo</button>
            </form>
            <button onClick={function(){alert('Not Working Yet')}}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;