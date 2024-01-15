function Ship(length, name) {
    return {
        name: name,
        length: length,
        beenHit: 0,
        hit: function () {
            this.beenHit++;
        },
        isSunk: function() {
            return this.length <= this.beenHit;
        }
    }
}

export function Gameboard() {
    return {
        board: [[null, null, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null, null, null]],

        placeShip: function(x, y, length, alignment, shipName) {
            const ship = Ship(length, shipName);
            if (alignment === 'horizontal') {
                for (let i = 0; i < ship.length; i++) {
                    this.board[y][x + i] = ship.name;
                }
            }
        }
    }
}