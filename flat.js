// 数组flat方法实现
function _flat(arr, depth = 1) {
  const result = [];
  arr.forEach((value) => {
    if (Array.isArray(value) && depth > 0) {
      result.push(..._flat(value, depth - 1));
    } else {
      result.push(value);
    }
  });

  return result;
}

console.log(_flat([1, 2, 3, [4, 5, [6, 7, [8, 9, [10, [11]]]]]], Infinity));
