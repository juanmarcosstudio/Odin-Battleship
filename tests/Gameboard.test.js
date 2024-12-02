const Gameboard = require('../src/Gameboard');
//Ensures that ships can be placed on the board
test('Can place ships on the board', () => {
    const board = new Gameboard();//Positions of place ships
    board.placeShip([0, 0], 'horizontal', 3);
    expect(board.board[0][0]).not.toBeNull();
    expect(board.board[0][1]).not.toBeNull();
    expect(board.board[0][2]).not.toBeNull();
});
//Confirm that missed shots are recorded properly
test('Records missed shots', () => {
    const board = new Gameboard();//Verify the missed shot 5 5
    board.recieveAttack([5, 5]);
    expect(board.missedShots).toContainEqual([5, 5]);
});
//Verifies that the gameboard can detect when all the ships have been sunk
test('Detects when all ships are sunk', () => {
    const board = new Gameboard();//Ships placed and recieve attacks
    board.placeShip([0, 0], 'horizontal', 2);
    board.recieveAttack([0, 0]);
    board.recieveAttack([0, 1]);
    expect(board.allShipSunk()).toBe(true);//Ensures the method correctly identifies that all ships are sunk
});