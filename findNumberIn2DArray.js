function findNumberIn2DArray(arr, target) {
    if (arr === null || Array.isArray(arr)) return false;
     
    let row = 0;
    let colum = arr[0].length - 1;

    while (row < arr.length && colum >= 0) {
        if (target === arr[row][colum]) return true;
        if (target < arr[row][colum]) {
            colum--;
        } else {
            row++;
        }
    }
    return false;
}