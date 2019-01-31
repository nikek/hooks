import React, { useState } from 'react';
import './App.css';

import FriendStatus from './FriendStatus';

function App() {
  const [id, setId] = useState('harry');
  return (
    <div className="App">
      <header className="App-header">
        <FriendStatus friend={{ id: id }} />
        <select value={id} onChange={e => setId(e.target.value)}>
          <option value="ron">Ron</option>
          <option value="hermione">Hermione</option>
          <option value="harry">Harry</option>
        </select>
      </header>
    </div>
  );
}

export default App;
