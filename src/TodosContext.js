import React, { useState } from 'react';

function useTodos() {
  const [todos, setTodos] = useState([{ title: 'Buy Oatly', done: false }]);
  const [filter, setFilter] = useState('all');

  function addTodo(todo) {
    setTodos(todos => todos.concat(todo));
  }
  function removeTodo(todo) {
    setTodos(todos => todos.filter(t => t != todo));
  }

  function filterFn(todo) {
    if (filter === 'all') {
      return true;
    }

    return filter === 'done' ? todo.done : !todo.done;
  }

  function toggleDone(index, done) {
    const newTodo = Object.assign({}, todos[index], { done });
    setTodos([...todos.slice(0, index), newTodo, ...todos.slice(index + 1)]);
  }

  return {
    filter,
    setFilter,
    filterFn,
    todos: todos.filter(filterFn),
    toggleDone,
    addTodo,
    removeTodo
  };
}

export const TodosContext = React.createContext();

export function TodosProvider(props) {
  return (
    <TodosContext.Provider value={useTodos()}>
      {props.children}
    </TodosContext.Provider>
  );
}
