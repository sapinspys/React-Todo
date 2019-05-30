import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoItem from './components/TodoComponents/TodoItem';
import './App.css';
    
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoStorage: [],
      task: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.task) {
      const newTask = {
        task: this.state.task,
        id: Date.now(),
        completed: false,
      }
  
      this.setState((state) => {
        return({
          todoStorage: [...state.todoStorage, newTask], 
          task: '',
        })
      })
    } else {
      alert("Todo item required")
    } 
  }

  handleChange = e => {
    this.setState({
      task: e.target.value
    })
  }

  handleCompletion = e => {
    let index = e.target.getAttribute('data-index');
    let currentFlag = this.state.todoStorage[index].completed;
    if (!currentFlag) {
      // e.target.style.textDecoration = 'line-through';
      // e.target.style.color = 'lightgray';
      // let dateCompleted = document.createElement('p');
      // dateCompleted.appendChild(document.createTextNode(`Completed ${Date(Date.now()).slice(0,21)} `));
      // dateCompleted.classList.add(`date-completed`)
      // dateCompleted.classList.add(`completion-${index}`)
      // // e.target.appendChild(dateCompleted);
      // Array.from(document.querySelectorAll('.item-container'))[`${index}`].appendChild(dateCompleted);
      this.setState(prevState => {
        const newItems = [...prevState.todoStorage];
        newItems[index].completed = true;
        return {todoStorage: newItems};
      })
    } else {
      // e.target.style.textDecoration = 'none';
      // e.target.style.color = 'black';
      // let completionDate = document.querySelector(`.completion-${index}`);
      // completionDate.parentNode.removeChild(completionDate);
      this.setState(prevState => {
        const newItems = [...prevState.todoStorage];
        newItems[index].completed = false;
        return {todoStorage: newItems};
      })
    }
  }

  clearCompleted = () => {
    // Array.from(document.querySelectorAll('.todo-item')).map(item => item.style.textDecoration = 'none');
    // Array.from(document.querySelectorAll('.todo-item')).map(item => item.style.color = 'black');
    // document.querySelector('.date-completed').remove(document.querySelector('.date-completed').selectedIndex)
    this.setState(prevState => {
      return {todoStorage: [...prevState.todoStorage].filter(item => item.completed !== true)};
    })     
  } 

  render() {
    return (
      <div className="todo-container">
        <h2>Reactive Todo</h2>
        <TodoForm 
          onSubmit={this.handleSubmit} 
          task={this.state.task}
          onChange={this.handleChange}
          clearFunction={this.clearCompleted}/>
        <div className="todo-list">
          {this.state.todoStorage.map((task, index) => (
            <TodoItem key={index}
            taskInfo={task}
            toggleCompleted={this.handleCompletion} 
            index={index}/>
          ))}
        </div>
        <a className="credits" href="https://github.com/sapinspys/React-Todo">GitHub Repository</a>
      </div>
    );
  }
}

export default App;
