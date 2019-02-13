// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return (
            <div className='todo-list'>
                <TodoItem todoItem={this.props.todoItem}/>
                {/* <TodoForm /> */}
            </div>
        )
    }
}

export default TodoList;