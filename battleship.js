function Ship(length) {
    return {
        length: length,
        beenHit: beenHit,
        hit: function () {
            this.beenHit++;
        },
        isSunk: function() {
            return this.length <= this.beenHit;
        }
    }
}