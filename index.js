const isValidSudoku = (board) => {
  const horizontalSets = [];
  const verticalSets = [];
  const smallGridSets = {};

  for (let i = 0; i < 9; i++) {
    horizontalSets.push(new Set());
    verticalSets.push(new Set());

    for (let j = 0; j < 9; j++) {
      const horizontalValue = board[i][j];
      if (horizontalValue !== ".") {
        if (horizontalSets[i].has(horizontalValue)) {
          return false;
        }
        horizontalSets[i].add(horizontalValue);
      }

      const verticalValue = board[j][i];
      if (verticalValue !== ".") {
        if (verticalSets[i].has(verticalValue)) {
          return false;
        }
        verticalSets[i].add(verticalValue);
      }

      const x = Math.ceil((i + 1) / 3);
      const y = Math.ceil((j + 1) / 3);

      if (horizontalValue !== ".") {
        if (!smallGridSets[`${x}-${y}`]) {
          smallGridSets[`${x}-${y}`] = new Set();
        }

        if (smallGridSets[`${x}-${y}`].has(horizontalValue)) {
          return false;
        }

        smallGridSets[`${x}-${y}`].add(horizontalValue);
      }
    }
  }

  return true;
};

module.exports = { isValidSudoku };
