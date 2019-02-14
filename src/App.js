import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoItem from './components/TodoComponents/TodoItem';
    
class App extends React.Component {
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
        return {todoStorage: newItems};
      })
    }
  }

  clearCompleted = () => {
    Array.from(document.querySelectorAll('.todo-item')).map(item => item.style.textDecoration = 'none');
    this.setState(prevState => {
      const newItems = [...prevState.todoStorage];
      return {todoStorage: newItems.filter(item => item.completed !== true)};
    })     
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
          onChange={this.handleChange}
          clearFunction={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
