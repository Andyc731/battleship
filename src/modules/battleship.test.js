import {describe, expect, test} from '@jest/globals';
import { Ship, Gameboard, Player } from './battleship';
import game from './game';

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
    expect(gameboard.allShipsSunk()).toBe(true);
}) 

test('Gameboard report sunk ships. Still alive', () => {
    const gameboard = Gameboard();
    const ship = Ship(3)
    gameboard.placeShip(3, 4, 'vertical', ship);
    gameboard.receiveAttack(3, 4);
    gameboard.receiveAttack(3, 5);
    gameboard.receiveAttack(3, 9);
    expect(gameboard.allShipsSunk()).toBe(false);
}) 

test('Gameboard how many ships alive', () => {
    const gameboard = Gameboard();
    const ship = Ship(3)
    gameboard.placeShip(3, 4, 'vertical', ship);
    expect(gameboard.shipsAlive).toBe(1);
})

test('randomCoord returns proper indexes', () => {
    const ship = Ship(3)
    const player = Player('1');
    const computer = Player();
    player.playerBoard.placeShip(3, 4, 'vertical', ship);

    // jest.spyOn(Math, 'random').mockReturnValue(0.5);
    
    expect(computer.randomCoord(player.playerBoard)).toEqual({x: 5, y: 5});
})

test('randomCoord returns proper indexes', () => {
    const ship = Ship(3)
    const player = Player('1');
    const computer = Player();
    player.playerBoard.placeShip(3, 4, 'vertical', ship);

    player.playerBoard.playedBoard[5][5] = 1;
    computer.attack(player.playerBoard, 3, 3);

    // jest.spyOn(Math, 'random').mockReturnValue(0.5);
    
    expect(computer.randomCoord(player.playerBoard)).toEqual({x: 5, y: 5});
})

test('check if played all cells', () => {
    const gameboard = Gameboard();
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            gameboard.playedBoard[i][j] = 1;
        }
    }

    expect(gameboard.playAvailable()).toBe(false);
})

test('check if played all cells', () => {
    const gameboard = Gameboard();
    const ship = Ship(3)
    gameboard.placeShip(3, 4, 'vertical', ship);
    gameboard.receiveAttack(3, 4);

    expect(gameboard.playAvailable()).toBe(true);
})

test('check which players turn', () => {
    const player = Player('1');
    const computer = Player();

    player.attack(computer.playerBoard, 4, 3);
    game();
})

test('check if slot is empty', () => {
    const player = Player('1');
    const ship = Ship(3)

    player.playerBoard.placeShip(3, 4, 'vertical', ship);

    expect(player.playerBoard.canPlace(3, 4, 'vertical', ship)).toBe(false);


})

test('check if slot is empty', () => {
    const player = Player('1');
    const ship = Ship(3)

    player.playerBoard.placeShip(3, 4, 'vertical', ship);

    expect(player.playerBoard.canPlace(4, 4, 'vertical', ship)).toBe(true);


})