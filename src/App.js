import './App.css';
import Board from './Board';
import Square from './Square';

const App = () => {
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