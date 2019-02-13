import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input type="text"
                    onChange={this.props.onChange}
                    placeholder='...Todo'/>
                <input type="submit" name="submit" value='Add Todo'/>
            </form>
        )
    }
}

export default TodoForm;