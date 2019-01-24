import React, { useContext } from 'react';

import { TodosContext } from './TodosContext';

const TodoFilter = () => {
  const { filter, setFilter } = useContext(TodosContext);
  function handleFilterChange(e) {
    setFilter(e.target.value);
  }
  return (
    <aside style={{ display: 'grid' }}>
      <label>
        <input
          type="radio"
          name="filter"
          value="all"
          checked={filter === 'all'}
          onChange={handleFilterChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="done"
          checked={filter === 'done'}
          onChange={handleFilterChange}
        />
        Done
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="undone"
          checked={filter === 'undone'}
          onChange={handleFilterChange}
        />
        Undone
      </label>
    </aside>
  );
};

export default TodoFilter;
