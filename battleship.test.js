import {describe, expect, test} from '@jest/globals';
import { Ship, Gameboard } from './battleship';

test('Ship', () => {
    const ship = Ship(4, 'ship1');
    ship.hit();
    expect(ship.beenHit).toBe(1);
})


test('Gameboard', () => {
    expect(Gameboard().board).toEqual([[null, null, null, null, null, null, null, null, null, null], 
                                       [null, null, null, null, null, null, null, null, null, null],
                                       [null, null, null, null, null, null, null, null, null, null], 
                                       [null, null, null, null, null, null, null, null, null, null],
                                       [null, null, null, null, null, null, null, null, null, null], 
                                       [null, null, null, null, null, null, null, null, null, null],
                                       [null, null, null, null, null, null, null, null, null, null], 
                                       [null, null, null, null, null, null, null, null, null, null],
                                       [null, null, null, null, null, null, null, null, null, null], 
                                       [null, null, null, null, null, null, null, null, null, null]])
})

test('Gameboard ship placement', () => {
    const gameboard = Gameboard();
    const ship = Ship(3)
    gameboard.placeShip(3, 4, 'horizontal', ship);
    expect(gameboard.board).toEqual( [[null, null, null, null, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null],
                                        [null, null, null, null, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null],
                                        [null, null, null, ship, ship, ship, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null],
                                        [null, null, null, null, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null],
                                        [null, null, null, null, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null]]

        )
})

test('Gameboard ship placement', () => {
    const gameboard = Gameboard();
    const ship = Ship(3)
    gameboard.placeShip(3, 4, 'vertical', ship);
    expect(gameboard.board).toEqual( [[null, null, null, null, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null],
                                        [null, null, null, null, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null],
                                        [null, null, null, ship, null, null, null, null, null, null], 
                                        [null, null, null, ship, null, null, null, null, null, null],
                                        [null, null, null, ship, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null],
                                        [null, null, null, null, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null]]

        )
})


test('Gameboard receiveAttack', () => {
    const gameboard = Gameboard();
    const ship = Ship(3)
    gameboard.placeShip(3, 4, 'vertical', ship);
    gameboard.receiveAttack(3, 4);
    expect(gameboard.board[4][3].beenHit).toBe(1);
})

test('Gameboard receiveAttack missed', () => {
    const gameboard = Gameboard();
    const ship = Ship(3)
    gameboard.placeShip(3, 4, 'vertical', ship);
    gameboard.receiveAttack(2, 4);
    expect(gameboard.board[4][2]).toBe(0);
})

test('Gameboard receiveAttack missed boolean check', () => {
    const gameboard = Gameboard();
    const ship = Ship(3)
    gameboard.placeShip(3, 4, 'vertical', ship);
    gameboard.receiveAttack(2, 4);

    expect(!!gameboard.board[4][2]).toBe(false);
})

test('Gameboard receiveAttack cannot play same place', () => {
    const gameboard = Gameboard();
    const ship = Ship(3)
    gameboard.placeShip(3, 4, 'vertical', ship);
    gameboard.receiveAttack(3, 4);
    gameboard.receiveAttack(3, 4);
    expect(gameboard.board[4][3].beenHit).toBe(1);
})

test('Gameboard report sunk ships', () => {
    const gameboard = Gameboard();
    const ship = Ship(3)
    gameboard.placeShip(3, 4, 'vertical', ship);
    gameboard.receiveAttack(3, 4);
    gameboard.receiveAttack(3, 5);
    gameboard.receiveAttack(3, 6);

}) 