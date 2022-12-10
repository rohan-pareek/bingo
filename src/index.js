import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GameContextProvider from './context/game-context-provider';

export const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
export const originalRules = [
  {
    name: 'Early Five',
    done: false
  },
  {
    name: 'Four Corners',
    done: false
  },
  {
    name: 'First Line',
    done: false
  },
  {
    name: 'Third Line',
    done: false
  },
  {
    name: 'Fifth Line',
    done: false
  },
  {
    name: 'Full House',
    done: false
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));

const localObject = localStorage.getItem('game-state');
const gameState = JSON.parse(localObject);

const calledNumbers = gameState?.calledNumbers;
const activeNumber = gameState?.activeNumber;
const rules = gameState?.rules;

root.render(
  <React.StrictMode>
    <GameContextProvider defaultValue = {{calledNumbers, activeNumber, availableNumbers: allNumbers, rules}}>
      <App />
    </GameContextProvider>
  </React.StrictMode>
);
