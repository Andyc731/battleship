async function gameLoop(player, computer) {
    let turnToggle = true;
    while (!player.playerBoard.allShipsSunk() && !computer.playerBoard.allShipsSunk()) {
        if (turnToggle) {
            const attackCoord = await playerTurn();
            if (!computer.playerBoard.playedBoard[attackCoord.y][attackCoord.x]) {
                player.attack(computer.playerBoard, attackCoord.x, attackCoord.y);
                turnToggle = !turnToggle;
            }
        } else {
            const coordinates = computer.randomCoord(player.playerBoard);
            computer.attack(player.playerBoard, coordinates.x, coordinates.y)
            turnToggle = !turnToggle;
        }
        displayBoards(player, computer);
    }
}

function playerTurn() {
    return new Promise(resolve=> {
        const computerCells = document.querySelectorAll('.container.computer .cell');

        function playerMoveHandler(event) {
            
            const clickedCell = event.target;
            const xInput = Number(clickedCell.dataset.x);
            const yInput = Number(clickedCell.dataset.y);

            computerCells.forEach(cellDiv => {
                cellDiv.removeEventListener('click', playerMoveHandler);
            });

            resolve({ x: xInput, y: yInput });
        }

        computerCells.forEach(cellDiv => {
            cellDiv.addEventListener('click', playerMoveHandler);
        });
    })
}

function displayBoards(player, computer) {
    const BOARDLENGTH = 10;
    for (let i = 0; i < BOARDLENGTH; i++) {
        for (let j = 0; j < BOARDLENGTH; j++) {
            if (computer.playerBoard.playedBoard[i][j]) {
                const cellDiv = document.querySelector(`.computer [data-x="${j}"][data-y="${i}"]`);
                cellDiv.classList.add('played');
                
            }
            if (player.playerBoard.playedBoard[i][j]) {
                const cellDiv = document.querySelector(`.player [data-x="${j}"][data-y="${i}"]`);
                cellDiv.classList.add('played');
                
            }
        }
    }
}

export default gameLoop;