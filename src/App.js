import React from 'react';
// import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoItem from './TodoItem';

const storage=[];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoStorage: storage,
      task: '',
      id: '',
      completed: false,
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todoStorage: [...this.state.todoStorage, newTask],
      task: '',
      id: '',
      completed: false,
    })
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>React-Todo: MVP</h2>
        <div className="todo-list">
          {console.log()}
        </div>
        <TodoForm 
          onSubmit={this.handleSubmit} 
          task={this.state.task}
          onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
