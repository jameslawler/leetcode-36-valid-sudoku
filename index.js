const isValidSudoku = (board) => {
  const horizontal = {};
  const vertical = {};
  const smallGrids = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];

      if (value === ".") {
        continue;
      }

      const x = Math.ceil((i + 1) / 3);
      const y = Math.ceil((j + 1) / 3);
      const gridPosition = `${x}-${y}`;

      if (!horizontal[i]) {
        horizontal[i] = {};
      }

      if (!vertical[j]) {
        vertical[j] = {};
      }

      if (!smallGrids[gridPosition]) {
        smallGrids[gridPosition] = {};
      }

      if (
        horizontal[i][value] ||
        vertical[j][value] ||
        smallGrids[gridPosition][value]
      ) {
        return false;
      }

      horizontal[i][value] = true;
      vertical[j][value] = true;
      smallGrids[gridPosition][value] = true;
    }
  }

  return true;
};

module.exports = { isValidSudoku };
