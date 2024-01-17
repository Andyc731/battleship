import { Ship, Gameboard, Player } from './modules/battleship';
import gameLoop from './modules/game';

gameDisplay();

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

    const BOARDLENGTH = 10;
    const playerContainer = document.querySelector('.container.player');

    for (let i = 0; i < BOARDLENGTH; i++) {
        for (let j = 0; j < BOARDLENGTH; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');

            cellDiv.dataset.x = j;
            cellDiv.dataset.y = i;

            if (player.playerBoard.board[i][j]) {
                cellDiv.classList.add('ship');
            }
            playerContainer.appendChild(cellDiv);
        }
    }

    const computerContainer = document.querySelector('.container.computer');
    for (let i = 0; i < BOARDLENGTH; i++) {
        for (let j = 0; j < BOARDLENGTH; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');

            cellDiv.dataset.x = j;
            cellDiv.dataset.y = i;

            if (computer.playerBoard.board[i][j]) {
                cellDiv.classList.add('ship');
            }
            // cellEventListener(cellDiv, player, computer);
            computerContainer.appendChild(cellDiv);
        }
    }
    
    gameLoop(player, computer);
    
}