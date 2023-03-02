Array.prototype._push = function (...args) {
  args.forEach((value) => {
    this[this.length] = value;
  });

  return this.length;
};

let arr = [];
arr._push(1, 2, 3, [4, 5], [6, [7, [8, 8]]]);
console.log(arr);
