import React, { useState, useContext } from 'react';

import { TodosContext } from './TodosContext';

const TodoInput = () => {
  const [value, setValue] = useState('');
  const { addTodo } = useContext(TodosContext);

  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ title: value, done: false });
    setValue('');
  }
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h2>New todo!</h2>
        <input type="text" value={value} onChange={handleValueChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoInput;
