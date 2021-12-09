const matrix = [[0, 15, 2, 1], [8, 9, 8, 5], [3, 3, 16, 7], [12, 5, 22, 5]];

const diagonalDifference = (matrix) => {
    // Your code
    
    let primarySum = 0;
    let secondarySum = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        primarySum += matrix[i][i];

    }
    
    let index = 0;

    for (let j = matrix.length - 1; j >= 0; j--) {
        secondarySum += matrix[j][index];
        index++;
    }
    
    let result = primarySum - secondarySum;

    return result;

}

console.log(diagonalDifference(matrix));