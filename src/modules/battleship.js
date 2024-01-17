function Ship(length) {
    return {
        length: length,
        beenHit: 0,
        hit: function() {
            this.beenHit++;
        },
        isSunk: function() {
            return this.beenHit >= this.length;
        }
    }
}

function Gameboard() {
    return {
        board: [...Array(10)].map(e => Array(10).fill(null)),

        playedBoard: [...Array(10)].map(e => Array(10).fill(null)),

        shipsAlive: 0,

        placeShip: function(x, y, alignment, ship) {
            if (alignment === 'horizontal') {
                for (let i = 0; i < ship.length; i++) {
                    this.board[y][x + i] = ship;
                }
            } else {
                for (let i = 0; i < ship.length; i++) {
                    this.board[y + i][x] = ship;
                }
            }
            this.shipsAlive++;
        },

        receiveAttack: function(x, y) {
            if (this.playedBoard[y][x]){
                return;
            }
            
            const targetShip = this.board[y][x];

            if (targetShip) {
                targetShip.hit()
                if (targetShip.isSunk()) {
                    this.shipsAlive--;
                }
            } else {
                this.board[y][x] = 0;
            }
            this.playedBoard[y][x] = 1;
        },

        allShipsSunk: function() {
            return !this.shipsAlive;
        },

        playAvailable: function() {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (!this.playedBoard[i][j]) {
                        return true;
                    }
                }
            }
            return false;
        },

        canPlace: function(x, y, alignment, ship) {
            const BOARDLENGTH = 10;

            if (alignment === 'horizontal') {
                if (x + ship.length - 1 > BOARDLENGTH - 1) return false;
                for (let i = 0; i < ship.length; i++) {
                    if (this.board[y][x + i]) return false;
                }
            } else {
                if (y + ship.length - 1 > BOARDLENGTH - 1) return false;

                for (let i = 0; i < ship.length; i++) {
                    if (this.board[y + i][x]) return false;
                }
            }

            return true;
        },

        randomPlace: function(ship) {
            const BOARDLENGTH = 10;
            let x, y;

            const alignment = Math.floor(Math.random() * 2) ? 'horizontal' : 'vertical';

            do {
                x = Math.floor(Math.random() * BOARDLENGTH);
                y = Math.floor(Math.random() * BOARDLENGTH);
            } while (!this.canPlace(x, y, alignment, ship));

            this.placeShip(x, y, alignment, ship);
        }
    }
}

function Player(player = 'computer') {
    return {
        player: player,

        playerBoard: Gameboard(),

        attack: function (enemyBoard, x, y) {
            enemyBoard.receiveAttack(x, y);
        },

        randomCoord: function(enemyBoard) {
            if (!enemyBoard.playAvailable()) {
                return;
            }
            const BOARDLENGTH = 10;

            let x, y;

            do {
                x = Math.floor(Math.random() * BOARDLENGTH);
                y = Math.floor(Math.random() * BOARDLENGTH);
            } while (enemyBoard.playedBoard[y][x]);

            return {x, y}
        }
    }
}

export { Ship, Gameboard, Player }