import { Ship, Gameboard, Player } from './modules/battleship';
import game from './modules/game';

gameDisplay();
// game();

function gameDisplay() {
    const player = Player('1');
    const computer = Player('computer');
    player.playerBoard.randomPlace(Ship(5));
    player.playerBoard.randomPlace(Ship(4));
    player.playerBoard.randomPlace(Ship(3));
    player.playerBoard.randomPlace(Ship(3));
    player.playerBoard.randomPlace(Ship(2));
    computer.playerBoard.randomPlace(Ship(5));
    computer.playerBoard.randomPlace(Ship(4));
    computer.playerBoard.randomPlace(Ship(3));
    computer.playerBoard.randomPlace(Ship(3));
    computer.playerBoard.randomPlace(Ship(2));
    const playerContainer = document.querySelector('.container.player');

    let playerTurn = true;
    player.playerBoard.board.forEach(row => {
        row.forEach(cell => {
            const cellDiv = document.createElement('div');
            if (cell) {
                cellDiv.classList.add('ship');

            }
            cellDiv.classList.add('cell');
            playerContainer.appendChild(cellDiv);
        })
    })

    const computerContainer = document.querySelector('.container.computer');
    let i = 0
    computer.playerBoard.board.forEach(row => {
        let j = 0;
        row.forEach(cell => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell', `x${j}`, `y${i}`);
            if (cell) {
                cellDiv.classList.add('ship');
            }
            cellEventListener(cellDiv, player, computer);

            computerContainer.appendChild(cellDiv);
            j++
        })
        i++;
    })
}

function cellEventListener(cellDiv, player, enemy) {
    cellDiv.addEventListener('click', () => {
        if (!cellDiv.classList.contains('played')) {
            cellDiv.classList.add('played')
            const xInput = Number(cellDiv.classList.item(1).slice(-1))
            const yInput = Number(cellDiv.classList.item(2).slice(-1))
            player.attack(enemy.playerBoard, xInput, yInput);
        };
    })
}