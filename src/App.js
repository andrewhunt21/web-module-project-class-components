import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = [
  {
    task: 'learn react',
    id: 111,
    completed: false
  },
  {
    task: 'style this app',
    id: 222,
    completed: false
  },
  {
    task: 'make it work',
    id: 333,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
