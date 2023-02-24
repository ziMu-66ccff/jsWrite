function _new(constructor, ...args) {
  if (typeof constructor !== 'function') {
    throw new Error('constructor must be function');
  }
  let newObj = Object.setPrototypeOf(constructor.prototype);
  let result = constructor.call(newObj, ...args);
  return result != null && typeof result === 'object' ? result : newObj;
}
