String.prototype._reverse = function (str) {
  return str.split('').reverse().join('');
};

let str = new String();
console.log(str._reverse('hello'));
