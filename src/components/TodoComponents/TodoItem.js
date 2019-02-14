import React from 'react';
import './Todo.css';

const TodoItem = props => {
    return <div className="item-container">
        <p className='todo-item' onClick={props.toggleCompleted} data-index={props.index}>
            {props.taskInfo.task}
        </p>
        <p className="todo-date">{Date(Date.now())}</p>
    </div>
}

export default TodoItem;

