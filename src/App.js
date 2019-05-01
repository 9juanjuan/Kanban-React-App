import React from 'react';
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
 