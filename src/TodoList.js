import React, { useContext } from 'react';
import { TodosContext } from './TodosContext';

const TodoList = () => {
  const { todos, toggleDone } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>
          <label>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleDone(todo.id)}
            />
            {todo.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
