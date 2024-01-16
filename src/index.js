import { Ship, Gameboard, Player } from './modules/battleship';


function gameDisplay() {
    const player = Player('1');
    const computer = Player('computer');

    const playerContainer = document.querySelector('.container.player');
    player.playerBoard.board.forEach(row => {
        row.forEach(cell => {
            console.log('blah')
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            playerContainer.appendChild(cellDiv);
        })
    })

    const computerContainer = document.querySelector('.container.computer');
    computer.playerBoard.board.forEach(row => {
        row.forEach(cell => {
            console.log('blah')
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            computerContainer.appendChild(cellDiv);
        })
    })
}


gameDisplay();