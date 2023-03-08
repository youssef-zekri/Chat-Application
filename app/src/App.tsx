import React from 'react';
import './App.css';
import RoutesProvider from './Routes/main.routes';
function App() {
  return (
    <div className="App">
      <RoutesProvider />
    </div>
  );
}

export default App;
