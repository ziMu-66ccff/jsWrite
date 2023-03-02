Array.prototype._filter = function (fn) {
  if (typeof fn !== 'function') {
    throw new Error('the type of arrgument must be function ');
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) result.push(this[i]);
  }

  return result;
};
