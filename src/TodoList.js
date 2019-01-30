import React, { useContext } from 'react';
import { TodosContext } from './TodosContext';

const TodoList = () => {
  const { todos, toggleDone } = useContext(TodosContext);

  return (
    <ul style={{ listStyle: 'none' }}>
      {todos.map((t, i) => (
        <li key={i}>
          <label>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleDone(i, !t.done)}
            />
            {t.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
