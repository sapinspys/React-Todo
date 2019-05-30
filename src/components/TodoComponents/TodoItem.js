import React from 'react';
import './Todo.css';

const TodoItem = props => {
    if (!props.taskInfo.completed) {
        return (
            <div className="item-container">
                <p className='todo-item' onClick={props.toggleCompleted} data-index={props.index}>
                    {props.taskInfo.task}
                </p>
            </div>
        )
    } else {
        return (
            <div className="item-container">
                <p className='todo-item__completed' onClick={props.toggleCompleted} data-index={props.index}>
                    {props.taskInfo.task}
                </p>
            </div>
        )
    }
}

export default TodoItem;

