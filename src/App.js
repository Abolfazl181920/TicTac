import './App.css';
import Board from './Board';
import Square from './Square';
import { useState } from 'react';

const defaultSquares = () => (new Array(9)).fill(null);

const App = () => {

  const [squares, setSquares] = useState(defaultSquares());

  const handleSquareClick = () => {
    console.log('some');
  }

  return (
    <main>
      <Board>
        {
          squares.map((square,index) => <Square onClick={() => handleSquareClick(index)} />)
        }
      </Board>
    </main>
  );
}

export default App;