import { Ship, Gameboard, Player } from './battleship';

function game() {
    const player = Player('player')
    const computer = Player('computer');
    let playerTurn = true;

    player.playerBoard.placeShip(2, 3, 'vertical', Ship(4))
    computer.playerBoard.placeShip(2, 3, 'vertical', Ship(4))



    // while (!player.playerBoard.allShipsSunk() && !computer.playerBoard.allShipsSunk()) {
    //     console.log(player, computer)
    //     if (playerTurn) {
    //         player.attack(computer.playerBoard, xInput, yInput);
    //         playerTurn = !playerTurn;
    //     } else {
    //         const coordinates = computer.randomCoord(player.playerBoard);
    //         computer.attack(player.playerBoard, coordinates.x, coordinates.y)
    //         playerTurn = !playerTurn;
    //     }
    // }


}

export default game;