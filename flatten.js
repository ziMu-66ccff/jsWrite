// 数组扁平化

// 1. 递归实现

// function flatten(arr) {
//   let result = [];

//   arr.forEach((value) => {
//     if (Array.isArray(value)) {
//       result = result.concat(flatten(value));
//     } else {
//       result.push(value);
//     }
//   });

//   return result;
// }

// 2. 利用toString, split方法实现

// function flatten(arr) {
//   return arr.toString().split(',');
// }

// 3. 利用flat方法

// function flatten(arr) {
//   return arr.flat(Infinity);
// }

// console.log(flatten([1, 2, [3, [4, 5, [6, 7]]], 8]));
