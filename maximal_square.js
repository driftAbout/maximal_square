function MaximalSquare(strArr) { 
  var sqr;
  let maxSqr = 0;  
  strArr.forEach((row, r) => {
    row.split('').forEach((col, c) =>{

      if (!parseInt(col)) return;
      sqr = true;
      for (var step = 0; step < strArr.length - r; step++){ 
        for (var sqrRow = 0; sqrRow < step + 1; sqrRow++){
          for (var sqrCol = 0; sqrCol < step + 1 - c; sqrCol++){
            if (!strArr[r + sqrRow] || !strArr[r + sqrRow][c + sqrCol] || !parseInt(strArr[r + sqrRow][c + sqrCol])) {
              sqr = true;
              return;
            }
          }
        }
  
        if (Math.pow(sqrRow, 2) > maxSqr) maxSqr = Math.pow(sqrRow, 2);
        if (maxSqr === Math.pow(strArr.length, 2)) return
      }
      if (maxSqr === Math.pow(strArr.length, 2)) return
    });
    if (maxSqr === Math.pow(strArr.length, 2)) return
  });
  return maxSqr; 
         
}


function MaximalSquare(strArr) { 
  var sqr = false;
  let maxSqr = 0;  
  strArr.forEach((rowData, rowIdx) => {
    rowData.split('').forEach((colData, colIdx) =>{

      if (!parseInt(colData)) return;
      sqr = true;
      for (var squareTest = 0; squareTest < strArr.length - rowIdx; squareTest++){ 
        for (var sqrRow = 0; sqrRow < squareTest + 1; sqrRow++){
          for (var sqrCol = 0; sqrCol < squareTest + 1 ; sqrCol++){
            console.log('row', rowIdx, 'col', colIdx, 'squareTest', squareTest,  'sqrRow', rowIdx + sqrRow,  'sqrCol', colIdx + sqrCol);
            if (!parseInt(strArr[rowIdx + sqrRow][colIdx + sqrCol])) {
              sqr = false;
              return;
            }
          }
        }
  
        if (Math.pow(sqrRow, 2) > maxSqr) maxSqr = Math.pow(sqrRow, 2);
        if (maxSqr === Math.pow(strArr.length, 2)) return
      }
      if (maxSqr === Math.pow(strArr.length, 2)) return
    });
    if (maxSqr === Math.pow(strArr.length, 2)) return
  });
  return maxSqr; 
         
}


function MaximalSquare(strArr) { 
  let maxSqr = 0;  
  let maxSqrSize = 0;
  strArr.forEach((rowData, row) => {
    rowData.split('').forEach((colData, col) =>{
      if (!parseInt(colData)) return;
      maxSqrSize = squareCheck(row, col)
      if (!maxSqrSize) return;

    });
    if (maxSqr === Math.pow(strArr.length, 2)) return maxSqr;
  });

  function squareCheck(rowIdx, columnIdx) {
    for (var square_side_length = 1; square_side_length < strArr.length - rowIdx; square_side_length++){ 
      for (var sqrRow = 0; sqrRow < square_side_length; sqrRow++){
        for (var sqrCol = 0; sqrCol < square_side_length ; sqrCol++){
          console.log('row', rowIdx, 'col', colIdx, 'square_side_length', square_side_length,  'sqrRow', rowIdx + sqrRow,  'sqrCol', colIdx + sqrCol);
          if (!parseInt(strArr[rowIdx + sqrRow][colIdx + sqrCol])) {
            return;
          }
        }
      }
  
      if (Math.pow(sqrRow, 2) > maxSqr) maxSqr = Math.pow(sqrRow, 2);
      if (maxSqr === Math.pow(strArr.length, 2)) return maxSqr;

    }
    return maxSqr
  }

  return maxSqr; 
         
}


function MaximalSquare(strArr) { 
  var maxSide = 0;
  var side = 0;
  strArr.forEach((rowData, row) => {
    rowData.split('').forEach((colData, col) =>{
      if (!parseInt(colData)) return;
      for (var square_side_length = 1; square_side_length < strArr.length - row; square_side_length++){ 
        side = squareCheck(row, col, square_side_length);
        if (!side) return;
        maxSide = side > maxSide ? side : maxSide;
      }
    });
    if (maxSide === strArr.length) return;
  });

  function squareCheck(rowIdx, colIdx, side_length) {
    for (var sqrRow = 0; sqrRow < side_length; sqrRow++){
      for (var sqrCol = 0; sqrCol < side_length ; sqrCol++){
        if (!parseInt(strArr[rowIdx + sqrRow][colIdx + sqrCol])) {
          return 0;
        }
      }
    }
    return sqrRow;
  }
  return Math.pow(maxSide, 2);
}



function MaximalSquare(strArr) { 
  var arr_max_sqr = (strArr.length < strArr[0].length) ? strArr.length : strArr[0].length;
  var maxSide = 0;
  var side = 0;
  strArr.forEach((rowData, row) => {
    rowData.split('').forEach((colData, col) =>{
      if (!parseInt(colData)) return;
      for (var square_side_length = 1; square_side_length < arr_max_sqr - row; square_side_length++){ 
        side = squareCheck(row, col, square_side_length);
        if (!side) return;
        maxSide = side > maxSide ? side : maxSide;
      }
    });
    if (maxSide === arr_max_sqr) return;
  });

  function squareCheck(rowIdx, colIdx, side_length) {
    for (var sqrRow = 0; sqrRow < side_length; sqrRow++){
      for (var sqrCol = 0; sqrCol < side_length ; sqrCol++){
        if (!parseInt(strArr[rowIdx + sqrRow][colIdx + sqrCol])) {
          return 0;
        }
      }
    }
    return sqrRow;
  }
  return Math.pow(maxSide, 2);
}




// function matrix(maxSqr) {
// 	matrx = [];
// 	for (let row = 0; row < maxSqr; row++){
// 		sqr = [];
// 		for (let col = 0; col <=row; col ++){
// 			sqr.push([row, col])
// 			if (row != col) sqr.push([col, row])
// 		}
// 		matrx.push(sqr)
// 	} 
// console.log('matrx', matrx) 
// }


function MaximalSquare(strArr) { 
  var arr_max_sqr = (strArr.length < strArr[0].length) ? strArr.length : strArr[0].length;
  var maxSide = 0;
  var side = 0;
  strArr.forEach((rowData, row) => {
    rowData.split('').forEach((colData, col) =>{
      if (!parseInt(colData)) return;
      for (var square_side_length = 1; square_side_length < arr_max_sqr - row; square_side_length++){ 
        side = squareCheck(row, col, square_side_length);
        if (!side) return;
        maxSide = side > maxSide ? side : maxSide;
      }
    });
    if (maxSide === arr_max_sqr) return;
  });

  function squareCheck(rowIdx, colIdx, side_length) {
    for (var sqrRow = 0; sqrRow < side_length; sqrRow++){
      for (var sqrCol = 0; sqrCol < side_length ; sqrCol++){
        if (!parseInt(strArr[rowIdx + sqrRow][colIdx + sqrCol])) {
          return 0;
        }
      }
    }
    return sqrRow;
  }
  return Math.pow(maxSide, 2);
}



function matrix(maxSqr, row, col) {
	matrx = [];
	for (let row = 0; row < maxSqr; row++){
		sqr = [];
		for (let col = 0; col <=row; col ++){
			sqr.push([row, col])
			if (row != col) sqr.push([col, row])
		}
		matrx.push(sqr)
	} 
console.log('matrx', matrx) 
}



// 

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