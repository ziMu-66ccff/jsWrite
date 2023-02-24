function once(fn) {
  return function (...args) {
    if (fn) {
      const ret = fn.call(this, ...args);
      fn = null;
      return ret;
    }
  };
}
