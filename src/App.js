import React, { useState } from 'react';
import './App.css';

function App() {
  const [light, toggleLight] = useState(false);
  console.log(light);

  return (
    <main className={light === true ? 'on' : 'off'}>
      <section>
        <div className="dot"></div>
        <button type="button" onClick={() => toggleLight(!light)}>Turn on/off</button>
      </section>
    </main>
  );
}

export default App;
