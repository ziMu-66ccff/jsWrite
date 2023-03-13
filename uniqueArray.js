// 数字数组去重

// 1. 利用set自动去重
function uniqueArray(arr) {
  flattenArr = arr.toString().split(',');
  return Array.from(new Set(flattenArr));
}
// emmm

console.log(uniqueArray([1, 2, 3, [1, 2, [3, 2, 2, 2], 4, 5, [5, 65]]]));
