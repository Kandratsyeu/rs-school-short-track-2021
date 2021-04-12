/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mines = matrix.slice();
  const newMatrix = [new Array(matrix[0].length).fill(false)];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix.push(matrix[i].slice());
  }
  newMatrix.push(new Array(matrix[0].length).fill(false));
  newMatrix.forEach((element) => {
    element.unshift(false);
    element.push(false);
  });
  for (let i = 1; i < newMatrix.length - 1; i++) {
    for (let j = 1; j < newMatrix[i].length - 1; j++) {
      let numMines = 0;
      if (newMatrix[i - 1][j - 1]) numMines++;
      if (newMatrix[i - 1][j]) numMines++;
      if (newMatrix[i - 1][j + 1]) numMines++;
      if (newMatrix[i][j - 1]) numMines++;
      if (newMatrix[i][j + 1]) numMines++;
      if (newMatrix[i + 1][j - 1]) numMines++;
      if (newMatrix[i + 1][j]) numMines++;
      if (newMatrix[i + 1][j + 1]) numMines++;
      mines[i - 1][j - 1] = numMines;
    }
  }
  return mines;
}

module.exports = minesweeper;
