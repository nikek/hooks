import React, { useState } from 'react';

function useTodos() {
  const [nextId, setNextId] = useState(1);
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState([
    { id: 0, title: 'Buy Oatly', done: false }
  ]);

  function addTodo(todo) {
    setTodos(todos => todos.concat({ id: nextId, ...todo }));
    setNextId(nextId + 1);
  }

  function filterFn(todo) {
    if (filter === 'all') {
      return true;
    }

    return filter === 'done' ? todo.done : !todo.done;
  }

  function toggleDone(id) {
    const index = todos.findIndex(t => t.id === id);
    const newTodo = { ...todos[index], done: !todos[index].done };
    setTodos([...todos.slice(0, index), newTodo, ...todos.slice(index + 1)]);
  }

  return {
    filter,
    setFilter,
    filterFn,
    todos: todos.filter(filterFn),
    toggleDone,
    addTodo
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
