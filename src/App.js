import React, { useState } from 'react';
import './App.css';

import FriendStatus from './FriendStatus';

function App() {
  const [id, setId] = useState(123);
  return (
    <div className="App">
      <header className="App-header">
        <FriendStatus friend={{ id: id }} />
        <input value={id} onChange={e => setId(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
