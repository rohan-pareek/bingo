import React, { useContext } from 'react';
import { allNumbers } from '../..';
import GameContext from '../../context/game-context';

export default function CalledNumbers() {
    const { calledNumbers } = useContext(GameContext);
    return (
        <div className='called-numbers'>
            <h2>Number Board</h2>
            <ul>
                {allNumbers.map(num => (
                    <li key={num} className = {`${calledNumbers.includes(num) ? 'called': ''}`}>{num}</li>
                ))}
            </ul>
        </div>
    )
}
