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
    computer.playerBoard.board.forEach(row => {
        row.forEach(cell => {
            const cellDiv = document.createElement('div');
            if (cell) {
                cellDiv.classList.add('ship');

            }
            cellDiv.classList.add('cell');

            computerContainer.appendChild(cellDiv);
        })
    })
}



