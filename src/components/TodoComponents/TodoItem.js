import React from 'react';
import './Todo.css';

class TodoItem extends React.Component {
    render() {
        return <div className="todo-item">
            {this.props.todoItem}
        </div>
    }
}

export default TodoItem;

