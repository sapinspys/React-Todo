import React from 'react';
import './Todo.css';

const TodoItem = props => {
    return <div className="todo-item">
        {props.taskInfo.task}
    </div>
}

export default TodoItem;

