'use strict';

function MaximalSquare(strArr) {
  //The maximum square dimension is equivalent to the shortest of the array length or array item length
  const arr_max_sqr = (strArr.length < strArr[0].length) ? strArr.length : strArr[0].length;
  let maxSide = 0;
  //loop through each character of each item in the array
  strArr.forEach((rowData, row) => {
    rowData.split('').forEach((colData, col) => {
      // set maxSqr to the maximum side length based on the bounds of the array and array item
      let maxSqr = Math.min(strArr[0].length - row, strArr[0].length - col);
      //only check for a square if the possibility of a larger square exists meaning, maxSqr is greater than any found square
      if (maxSqr > maxSide) maxSide = Math.max(squareCheck(maxSqr, row, col), maxSide);
    });
    //if the maxSide is equal to the maximum for the array, then stop looking.
    if (maxSide === arr_max_sqr) return;
  });

  function squareCheck(maxSqrSide, rowIdx, colIdx) {
    //use the rowIdx and colIdx as the corner of the square
    //maxSqrSide is the largest square to check
    for (var row = 0; row < maxSqrSide; row++){
      for (let col = 0; col <=row; col ++){
        //if the value is 0, then the square is broken
        if ( !parseInt(strArr[row + rowIdx][col + colIdx]) || !parseInt(strArr[col + colIdx][row + rowIdx])) return 0;
      }
    }
    //the row is equivalent to the longest side of the square
    return row;
  }

  return Math.pow(maxSide, 2);
}