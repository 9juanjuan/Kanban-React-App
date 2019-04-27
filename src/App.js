import React from 'react';
import logo from './logo.svg';
import './App.css';
import cardsList from './cardsList'
import KanbanBoard from './KanbanBoard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <KanbanBoard cards={cardsList}/>
      </header>
    </div>
  );
}

export default App;
