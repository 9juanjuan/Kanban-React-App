import React from 'react';
import logo from './logo.svg';
import './App.css';
import cardsList from './cardsList'
import KanbanBoard from './KanbanBoard'

function App() {
  return (
    <div> 
    
        <KanbanBoard cards={cardsList}/>
  
    </div>
  );
}

export default App;
