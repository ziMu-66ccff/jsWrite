// 数组元素求和
function toSumFromArr(arr) {
  return arr
    .toString()
    .split(',')
    .reduce((total, value) => {
      return (total += Number(value));
    }, 0);
}

console.log(toSumFromArr([1, 2, [3, 4], [5, [6, 7]]]));
