export function Ship(length) {
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

export function Gameboard() {
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
        }
    }
}

export function Player(player = 'computer') {
    return {
        player: player,

        playerBoard: Gameboard(),

        attack: function (enemyBoard, x, y) {
            enemyBoard.receiveAttack(x, y);
        },

        aiRandom: function(enemyBoard) {
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