import { Ship, Gameboard, Player } from './modules/battleship';


function gameDisplay() {
    const player = Player('1');
    const computer = Player('computer');

    const container = document.querySelector('.container');
    player.playerBoard.board.forEach(row => {
        row.forEach(cell => {
            console.log('blah')
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            container.appendChild(cellDiv);
        })
    })
}

gameDisplay();