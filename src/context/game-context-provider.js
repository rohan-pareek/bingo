import React, { useState } from 'react'
import { allNumbers, originalRules } from '..';
import GameContext from './game-context';

export default function GameContextProvider({ children, defaultValue = {} }) {

    const [activeNumber, setActiveNumber] = useState(defaultValue.activeNumber || 0);
    const [calledNumbers, setCalledNumbers] = useState(defaultValue.calledNumbers || []);
    const [availableNumbers, setAvailableNumbers] = useState(defaultValue.availableNumbers || allNumbers);
    const [rules, setRules] = useState(defaultValue.rules || originalRules);

    const setCalled = (num) => {
        const gameState = {
            activeNumber: num,
            calledNumbers: [num, ...calledNumbers],
            availableNumbers: [...allNumbers.filter(n => ![num, ...calledNumbers].includes(n))],
            rules
        };
        localStorage.setItem('game-state', JSON.stringify(gameState));
        setActiveNumber(gameState.activeNumber)
        setCalledNumbers(gameState.calledNumbers);
        setAvailableNumbers(gameState.availableNumbers);
    }

    const checkRule = (name) => {
        const gameState = {
            activeNumber,
            calledNumbers,
            availableNumbers,
            rules: [...rules.map(rule => {
                if(rule.name === name) {
                    rule.done = !rule.done
                }
                return rule;
            })]
        };
        localStorage.setItem('game-state', JSON.stringify(gameState));
        setRules(gameState.rules)
    }

    const resetGame = () => {
        localStorage.removeItem('game-state');
        setCalledNumbers([]);
        setActiveNumber(0);
        setAvailableNumbers(allNumbers);
        setRules(originalRules);
    }

    return (
        <GameContext.Provider
            value={{
                activeNumber,
                setActiveNumber,
                calledNumbers,
                setCalled,
                resetGame,
                availableNumbers,
                rules,
                checkRule
            }}>{children}</GameContext.Provider>
    )
}
