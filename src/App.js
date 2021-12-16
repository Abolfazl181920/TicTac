import './App.css';
import Board from './Board';
import Square from './Square';
import { useState } from 'react';

const App = () => {

  const [squares, setSquares] = useState();
  
  return (
    <main>
      <Board>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </Board>
    </main>
  );
}

export default App;