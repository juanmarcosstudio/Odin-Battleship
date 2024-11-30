class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
    }
    hit() {
        if (this.hits < this.length) this.length += 1;
    }
    isSunk() {
        return this.hits === this.length;
    }
}

module.exports = Ship;