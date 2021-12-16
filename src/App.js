import './App.css';
import Board from './Board';
import Square from './Square';
import { useState } from 'react';

const defaultSquares = () => (new Array(9)).fill(null);

const App = () => {

  const [squares, setSquares] = useState(defaultSquares());

  const handleSquareClick = () => {
    let newSquares = squares;
    newSquares[index] = 'x';
    setSquares([...newSquares]);
  }

  return (
    <main>
      <Board>
        {
          squares.map((square,index) =>
          <Square
            x = {Square === 'x' ? 1 : 0}
            o = {Square === 'o' ? 1 : 0}
            onClick={() => handleSquareClick(index)} />)
        }
      </Board>
    </main>
  );
}

export default App;