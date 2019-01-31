import React, { Component } from 'react';
import './App.css';

import TodoInput from './TodoInput';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TODOS</h1>
          <div>
            <TodoInput />
            <TodoFilter />
            <TodoList />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
