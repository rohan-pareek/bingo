import { useContext } from 'react';
import ActiveNumber from './components/active-number';
import CalledNumbers from './components/called-numbers';
import Header from './components/header';
import GameContext from './context/game-context';
import './style.css';

function App() {
  const { resetGame } = useContext(GameContext);
  return (
    <>
      <Header />
      <section className='app-section'>
        <div className='reset'>
          <button className='btn-reset' onClick={resetGame}>Reset Game</button>
        </div>
        <section className='app-body'>
          <aside>
            <CalledNumbers />
          </aside>
          <main>
            <ActiveNumber />
          </main>
        </section>
        <footer>
          &#123;Developed by Rohan Pareek&#125;
        </footer>
      </section>
    </>
  );
}

export default App;
