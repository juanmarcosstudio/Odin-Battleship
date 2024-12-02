const ship = require('./Ship');

class Gameboard { //representing 10x10 empty gameboard
    constructor() {
        this.board = Array(10).fill(null).map(() => Array(10).fill(null));
        this.missedShots = []; //to store positions of missed attacks
        this.ships = []; //to store ships placed on the board
    }
    //Places a ship on the gameboard
    placeShip(start, direction, length) {
        const newShip = new ship(length);
        const shipPositions = [];

        for (let i = 0; i < length; i++) {
            const x = direction === 'horizontal' ? start[0] : start[0] + i;
            const y = direction === 'vertical' ? start[1] : start[1] + i;
            
            if (x >= 10 || y >= 10 || this.board[x][y] !== null) { //for proper placement of the boards/ships
                throw new Error('Invalid placement');
            }
            this.board[x][y] = newShip;
            shipPositions.push([x, y]);
        }

        this.ships.push({ ship: newShip, positions: shipPositions });
    }
    //Handles attck for the gameboard
    recieveAttack(coords) {
        const [x, y] = coords;//Coordinates

        if (this.board[x][y] === null) { //For missedshots
            this.missedShots.push(coords);
        } else if (this.board[x][y] instanceof ship) {
            this.board[x][y].hit();
        }
    }
    //Checks if all the ships on the board are sunk
    allShipSunk() {
        return this.ships.every(({ ship }) => ship.isSunk());
    }
}

module.exports = Gameboard;