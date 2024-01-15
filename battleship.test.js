import {describe, expect, test} from '@jest/globals';
import { Gameboard } from './battleship';

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
    gameboard.placeShip(3, 4, 3, 'horizontal', 'ship1');
    expect(gameboard.board).toEqual( [[null, null, null, null, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null],
                                        [null, null, null, null, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null],
                                        [null, null, null, 'ship1', 'ship1', 'ship1', null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null],
                                        [null, null, null, null, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null],
                                        [null, null, null, null, null, null, null, null, null, null], 
                                        [null, null, null, null, null, null, null, null, null, null]]

        )
})