import React, { useState, useContext } from 'react';

import { TodosContext } from './TodosContext';

const TodoInput = () => {
  const [value, setValue] = useState('');
  const { addTodo } = useContext(TodosContext);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    addTodo({ title: value, done: false });
  }
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h2>New todo!</h2>
        <input type="text" onChange={handleValueChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoInput;
