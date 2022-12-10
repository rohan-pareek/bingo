import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../../context/game-context';

export default function ActiveNumber() {
    const { activeNumber, setCalled, availableNumbers, rules, checkRule } = useContext(GameContext);
    const [displayNumber, setDisplayNumber] = useState(activeNumber);

    let time = 25;
    let random;

    useEffect(() => {
        setDisplayNumber(activeNumber)
    }, [activeNumber]);

    const changeDisplay = () => {
        if (time > 0) {
            time--;
            random = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
            setDisplayNumber(random);
            setTimeout(changeDisplay, 50);
        } else {
            setCalled(random);
        }
    }

    return (
        <section>
            <button className='btn-primary' onClick={changeDisplay} disabled={availableNumbers.length === 0}>Pick New Number</button>
            {displayNumber !== 0 && <div className='display-number'>{displayNumber}</div>}
            {/* {availableNumbers.length === 0 && <div className='gameover'>
                <img src='/images/gameover.gif' alt='game over' />
            </div>} */}
            <ul className='rules'>
                {rules.map(rule => (
                    <li>
                        <input
                            type="checkbox"
                            id={rule.name}
                            checked={rule.done}
                            onChange={() => checkRule(rule.name)} />
                        <label htmlFor={rule.name}>{rule.done ? <s>{rule.name}</s> : <>{rule.name}</>}</label>
                    </li>
                ))}
            </ul>
        </section>
    )
}
