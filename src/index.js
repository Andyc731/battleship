import { Ship, Gameboard, Player } from './modules/battleship';
import gameLoop from './modules/game';

gameDisplay();

function gameDisplay() {
    const player = Player('1');
    const computer = Player('computer');

    computer.playerBoard.randomPlace(Ship(5));
    computer.playerBoard.randomPlace(Ship(4));
    computer.playerBoard.randomPlace(Ship(3));
    computer.playerBoard.randomPlace(Ship(3));
    computer.playerBoard.randomPlace(Ship(2));

    const playerContainer = document.querySelector('.container.player');
    
    createBoard(player, '.container.player');
    createBoard(computer, '.container.computer');
    
    gameLoop(player, computer);
    
}

function createBoard(player, containerSelector) {
    const BOARDLENGTH = 10;
    const container = document.querySelector(containerSelector);
    for (let i = 0; i < BOARDLENGTH; i++) {
        for (let j = 0; j < BOARDLENGTH; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');

            cellDiv.dataset.x = j;
            cellDiv.dataset.y = i;

            if (player.playerBoard.board[i][j]) {
                cellDiv.classList.add('ship');
            }
            container.appendChild(cellDiv);
        }
    }
}