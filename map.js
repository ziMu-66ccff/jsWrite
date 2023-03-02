Array.prototype._map = function (fn) {
  if (typeof fn !== 'function') {
    throw new Error('the type of arrgument must be function');
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    this.push(fn(this[i]));
  }

  return result;
};
