import './App.css';
import Board from './Board';
import Square from './Square';
import { useState } from 'react';

const defaultSquares = () => new Array(arrayLength: 9);

const App = () => {

  const [squares, setSquares] = useState(defaultSquares());

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