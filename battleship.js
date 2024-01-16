export function Ship(length) {
    return {
        length: length,
        beenHit: 0,
        hit: function () {
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
        },

        receiveAttack: function(x, y) {
            if (!this.playedBoard[y][x]) {
                this.board[y][x] ? this.board[y][x].hit() : this.board[y][x] = 0;
                this.playedBoard[y][x] = 1;
            }
        }
    }
}