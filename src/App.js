import React from 'react';
// import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoItem from './components/TodoComponents/TodoItem';
    
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoStorage: [],
      task: '',
      id: '',
      completed: false,
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
    }

    this.setState((state) => {
      return({
        todoStorage: [...state.todoStorage, newTask], 
        task: '',
        id: '',
        completed: false,
      })
    })
  }

  handleChange = e => {
    this.setState({
      task: e.target.value
    })
  }

  handleToggle = e => {
    let index = e.target.getAttribute('data-index');
    let currentFlag = this.state.todoStorage[index].completed;
    if (currentFlag === false) {
      e.target.style.textDecoration = 'line-through';
      this.setState(prevState => {
        const newItems = [...prevState.todoStorage];
        newItems[index].completed = true;
        return {items: newItems};
      })
    } else {
      e.target.style.textDecoration = 'none';
      this.setState(prevState => {
        const newItems = [...prevState.todoStorage];
        newItems[index].completed = false;
        return {items: newItems};
      })
    }
  }

  render() {
    return (
      <div>
        <h2>React-Todo: MVP</h2>
        <div className="todo-list">
          {this.state.todoStorage.map((task, index) => (
            <TodoItem key={index} taskInfo={task} toggleCompleted={this.handleToggle} index={index}/>
          ))}
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
