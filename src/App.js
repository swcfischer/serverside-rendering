import React, { useState, useCallback } from 'react';

import './App.css';

function App(props) {
  const [num, setNum] = useState(0);

  const increase = useCallback((e) => {
    e.preventDefault();
    setNum(num + 1);
  });

  const decrease = useCallback((e) => {
    e.preventDefault();
    setNum(num - 1);
  });

  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
